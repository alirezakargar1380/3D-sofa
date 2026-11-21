import Skeleton from '@mui/material/Skeleton';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export function ChatNavItemSkeleton({ sx, ...other }: StackProps) {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={[{
        px: 2.5,
        py: 1.5,
        ...sx,
      }, { alignItems: "center" }]}
      {...other}
    >
      <Skeleton variant="circular" sx={{ width: 48, height: 48 }} />

      <Stack spacing={1} sx={{ flexGrow: 1 }}>
        <Skeleton sx={{ width: 0.75, height: 10 }} />
        <Skeleton sx={{ width: 0.5, height: 10 }} />
      </Stack>
    </Stack>
  );
}
