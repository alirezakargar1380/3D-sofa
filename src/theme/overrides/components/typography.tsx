import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          '&:where(p)': {
            marginBottom: theme.spacing(2),
          },
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
