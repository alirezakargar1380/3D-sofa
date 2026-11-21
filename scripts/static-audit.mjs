import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { builtinModules } from 'node:module';
import { dirname, extname, join, resolve } from 'node:path';

const root = process.cwd();
const sourceRoot = join(root, 'src');
const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const declaredPackages = new Set([
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.devDependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
]);
const nodeBuiltins = new Set([
  ...builtinModules,
  ...builtinModules.map((moduleName) => `node:${moduleName}`),
]);
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']);
const resolvableExtensions = ['', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json'];
const indexCandidates = ['index.ts', 'index.tsx', 'index.js', 'index.jsx', 'index.mjs', 'index.cjs'];

const legacyPatterns = [
  ['MUI Grid2 removed API', /@mui\/material\/Unstable_Grid2/],
  ['MUI Lab LoadingButton', /@mui\/lab\/LoadingButton/],
  ['legacy lazy-image wrapper', /react-lazy-load-image-component/],
  ['legacy organization-chart wrapper', /react-organizational-chart/],
  ['legacy React Quill package', /from\s+['"]react-quill['"]/],
  ['legacy React Map GL root import', /from\s+['"]react-map-gl['"]/],
  ['ReactDOM.render', /ReactDOM\.render\s*\(/],
  ['React findDOMNode', /findDOMNode\s*\(/],
  ['React 19 useRef without an initial value', /useRef(?:<[^>]+>)?\(\s*\)/],
  ['removed custom Next Emotion cache', /next-emotion-cache/],
  ['deprecated ListItemSecondaryAction component', /ListItemSecondaryAction/],
  ['Autocomplete renderTags API', /\brenderTags=/],
  ['Autocomplete key spread from getItemProps', /\{\.\.\.getItemProps\(\{ index \}\)\}/],
  ['Autocomplete renderOption legacy props argument', /renderOption=\{\(props\s*,/],
  ['Autocomplete legacy renderInput params', /params\.(?:InputProps|inputProps)/],
  ['removed StepLabel StepIconComponent prop', /\bStepIconComponent=/],
  ['removed Rating IconContainerComponent prop', /\bIconContainerComponent=/],
  ['removed SpeedDialAction tooltip props', /\b(?:tooltipTitle|tooltipPlacement|tooltipOpen|TooltipClasses)=/],
  ['removed Tabs flexContainer class', /tabsClasses\.flexContainer/],
  ['removed Typography paragraph style override', /styleOverrides\s*:\s*\{[\s\S]{0,160}\bparagraph\s*:/],
  ['removed Select Menu PaperProps', /MenuProps\s*[:=]\s*\{\{?[\s\S]{0,260}\b(?:PaperProps|MenuListProps|TransitionProps)\s*:/],
];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) return walk(absolute);
    return sourceExtensions.has(extname(entry.name)) ? [absolute] : [];
  });
}

function resolvesLocalImport(fromFile, specifier) {
  const base = specifier.startsWith('src/')
    ? join(root, specifier)
    : resolve(dirname(fromFile), specifier);

  if (resolvableExtensions.some((extension) => existsSync(`${base}${extension}`))) return true;
  return indexCandidates.some((candidate) => existsSync(join(base, candidate)));
}

const files = walk(sourceRoot);
const errors = [];

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  const relative = file.slice(root.length + 1);

  for (const [label, pattern] of legacyPatterns) {
    if (pattern.test(source)) errors.push(`${relative}: ${label}`);
  }

  if (/ssr\s*:\s*false/.test(source) && !/^\s*['"]use client['"];?/m.test(source)) {
    errors.push(`${relative}: dynamic import with ssr:false must be in a Client Component`);
  }

  const importPatterns = [
    /(?:from\s+|import\s*\()\s*['"]([^'"]+)['"]/g,
    /(?:^|[;\n])\s*import\s*['"]([^'"]+)['"]/g,
    /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
  ];

  for (const importPattern of importPatterns) {
    for (const match of source.matchAll(importPattern)) {
      const specifier = match[1];

      if (specifier.startsWith('.') || specifier.startsWith('src/')) {
        if (!resolvesLocalImport(file, specifier)) {
          errors.push(`${relative}: unresolved local import ${specifier}`);
        }
        continue;
      }

      if (nodeBuiltins.has(specifier)) continue;

      const packageName = specifier.startsWith('@')
        ? specifier.split('/').slice(0, 2).join('/')
        : specifier.split('/')[0];

      if (!declaredPackages.has(packageName)) {
        errors.push(`${relative}: undeclared external package ${packageName}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`Static upgrade audit failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Static upgrade audit passed across ${files.length} source files.`);
}

if (!existsSync(join(root, 'public'))) {
  console.warn('Warning: public/ is absent. Restore the licensed Minimal template assets before visual QA.');
}
