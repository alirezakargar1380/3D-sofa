import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type OrganizationalChartVariant = 'simple' | 'standard' | 'group';

export type ItemProps = {
  name: string;
  group?: string;
  role?: string | null;
  avatarUrl?: string | null;
  children?: ItemProps[];
};

export type ListProps = {
  data: ItemProps;
  depth: number;
  variant?: OrganizationalChartVariant;
  sx?: SxProps<Theme>;
};

export type SubListProps = {
  data: ItemProps[];
  depth: number;
  variant?: OrganizationalChartVariant;
  sx?: SxProps<Theme>;
};

export type OrganizationalChartProps = Omit<BoxProps, 'children' | 'sx'> & {
  data: ItemProps;
  variant?: OrganizationalChartVariant;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  lineBorderRadius?: string;
  nodePadding?: string;
  /** Styles applied to every chart node (kept compatible with the original component API). */
  sx?: SxProps<Theme>;
  /** Styles applied to the scrollable chart container. */
  rootSx?: SxProps<Theme>;
};
