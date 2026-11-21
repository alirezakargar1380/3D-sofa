'use client';

import { useMemo } from 'react';
import merge from 'lodash/merge';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { useLocales } from 'src/locales';

import { useSettingsContext } from 'src/components/settings';

// system
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
// options
import RTL from './options/right-to-left';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
import { createPresets } from './options/presets';
import { createContrast } from './options/contrast';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { currentLang } = useLocales();

  const settings = useSettingsContext();

  const themeWithLocale = useMemo(() => {
    const presets = createPresets(settings.themeColorPresets);
    const contrast = createContrast(settings.themeContrast, settings.themeMode);

    const baseTheme = createTheme({
      palette: {
        ...palette(settings.themeMode),
        ...presets.palette,
        ...contrast.palette,
      },
      customShadows: {
        ...customShadows(settings.themeMode),
        ...presets.customShadows,
      },
      direction: settings.themeDirection,
      shadows: shadows(settings.themeMode),
      shape: { borderRadius: 8 },
      typography,
    } as ThemeOptions);

    const components = merge(componentsOverrides(baseTheme), contrast.components);

    return createTheme(baseTheme, { components }, currentLang.systemValue);
  }, [
    currentLang.systemValue,
    settings.themeColorPresets,
    settings.themeContrast,
    settings.themeDirection,
    settings.themeMode,
  ]);

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <RTL themeDirection={settings.themeDirection}>
        {/* <CssBaseline /> */}
        {children}
      </RTL>
    </MuiThemeProvider>
  );
}
