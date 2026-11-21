'use client';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { flattenArray } from 'src/utils/flatten-array';

import GroupNode from './common/group-node';
import SimpleNode from './common/simple-node';
import StandardNode from './common/standard-node';
import type { ItemProps, OrganizationalChartProps, OrganizationalChartVariant } from './types';

// ----------------------------------------------------------------------

type NodeContentProps = {
  node: ItemProps;
  depth: number;
  variant: OrganizationalChartVariant;
  sx: OrganizationalChartProps['nodeSx'];
};

function NodeContent({ node, depth, variant, sx }: NodeContentProps) {
  if (variant === 'standard') {
    return (
      <StandardNode
        sx={sx}
        node={node}
        onEdit={() => console.info('EDIT', node.name)}
        onDelete={() => console.info('DELETE', node.name)}
      />
    );
  }

  if (variant === 'group') {
    return (
      <GroupNode
        sx={sx}
        node={node}
        depth={depth}
        length={flattenArray(node.children ?? []).length}
      />
    );
  }

  return <SimpleNode sx={sx} node={node} />;
}

// ----------------------------------------------------------------------

export default function OrganizationalChart({
  data,
  variant = 'simple',
  lineColor,
  lineWidth = '1.5px',
  lineHeight = '32px',
  lineBorderRadius = '24px',
  nodePadding = '4px',
  sx,
  rootSx,
  ...other
}: OrganizationalChartProps) {
  const theme = useTheme();
  const connectorColor = lineColor ?? theme.palette.divider;
  const connector = `${lineWidth} solid ${connectorColor}`;

  const renderBranch = (node: ItemProps, depth: number) => (
    <Box
      component="li"
      key={`${depth}-${node.name}`}
      sx={{
        listStyle: 'none',
        position: 'relative',
        textAlign: 'center',
        px: nodePadding,
        pt: lineHeight,
        '&::before, &::after': {
          content: "''",
          top: 0,
          width: '50%',
          height: lineHeight,
          position: 'absolute',
          borderTop: connector,
        },
        '&::before': { right: '50%' },
        '&::after': { left: '50%', borderLeft: connector },
        '&:first-of-type::before': { border: 0 },
        '&:last-of-type::after': { border: 0 },
        '&:first-of-type::after': {
          borderTopLeftRadius: lineBorderRadius,
        },
        '&:last-of-type::before': {
          borderTopRightRadius: lineBorderRadius,
          borderRight: connector,
        },
        '&:only-of-type': {
          pt: lineHeight,
          '&::before, &::after': { display: 'none' },
        },
      }}
    >
      <NodeContent node={node} depth={depth} variant={variant} sx={sx} />

      {!!node.children?.length && (
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            '&::before': {
              content: "''",
              top: 0,
              left: '50%',
              width: 0,
              height: lineHeight,
              position: 'absolute',
              borderLeft: connector,
            },
          }}
        >
          {node.children.map((child) => renderBranch(child, depth + 1))}
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        width: 1,
        overflow: 'auto',
        textAlign: 'center',
        WebkitOverflowScrolling: 'touch',
        ...rootSx,
      }}
      {...other}
    >
      <Box sx={{ display: 'inline-block', minWidth: 'max-content', px: 1 }}>
        <NodeContent node={data} depth={0} variant={variant} sx={sx} />

        {!!data.children?.length && (
          <Box
            component="ul"
            sx={{
              m: 0,
              p: 0,
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              '&::before': {
                content: "''",
                top: 0,
                left: '50%',
                width: 0,
                height: lineHeight,
                position: 'absolute',
                borderLeft: connector,
              },
            }}
          >
            {data.children.map((child) => renderBranch(child, 1))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
