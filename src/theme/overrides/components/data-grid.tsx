import type {} from '@mui/x-data-grid/themeAugmentation';

import type { Theme } from '@mui/material/styles';
import { tablePaginationClasses } from '@mui/material/TablePagination';

// ----------------------------------------------------------------------

export function dataGrid(theme: Theme) {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 0,
          [`& .${tablePaginationClasses.root}`]: {
            borderTop: 0,
          },
          [`& .${tablePaginationClasses.toolbar}`]: {
            height: 'auto',
          },
          '& .MuiDataGrid-toolbarContainer': {
            padding: theme.spacing(2),
            borderBottom: `1px dashed ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.neutral,
          },
          '& .MuiDataGrid-panelHeader, & .MuiDataGrid-panelFooter': {
            padding: theme.spacing(2),
          },
          '& .MuiDataGrid-panelFooter': {
            justifyContent: 'flex-end',
            borderTop: `1px dashed ${theme.palette.divider}`,
          },
          '& .MuiDataGrid-filterForm': {
            gap: theme.spacing(2),
            padding: theme.spacing(2),
          },
        },
        cell: {
          borderBottom: `1px dashed ${theme.palette.divider}`,
        },
        columnSeparator: {
          color: theme.palette.divider,
        },
        columnHeaders: {
          borderRadius: 0,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
