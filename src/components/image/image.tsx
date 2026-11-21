import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

import { getRatio } from './utils';
import type { ImageProps } from './types';

// ----------------------------------------------------------------------

const Image = forwardRef<HTMLSpanElement, ImageProps>(
  (
    {
      ratio,
      overlay,
      disabledEffect = false,
      alt,
      src,
      srcSet,
      sizes,
      loading = 'lazy',
      decoding = 'async',
      crossOrigin,
      referrerPolicy,
      onLoad,
      onError,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Box
        ref={ref}
        component="span"
        className="component-image"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          verticalAlign: 'bottom',
          display: 'inline-block',
          ...(ratio && { width: 1, pt: getRatio(ratio) }),
          ...(overlay && {
            '&::before': {
              content: "''",
              inset: 0,
              zIndex: 1,
              position: 'absolute',
              background: overlay || alpha(theme.palette.grey[900], 0.48),
              pointerEvents: 'none',
            },
          }),
          ...sx,
        }}
        {...other}
      >
        <Box
          component="img"
          alt={alt ?? ''}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          loading={loading}
          decoding={decoding}
          crossOrigin={crossOrigin}
          referrerPolicy={referrerPolicy}
          onLoad={(event) => {
            if (!disabledEffect) {
              event.currentTarget.dataset.loaded = 'true';
            }
            onLoad?.(event);
          }}
          onError={onError}
          sx={{
            width: 1,
            height: 1,
            display: 'block',
            objectFit: 'cover',
            verticalAlign: 'bottom',
            ...(ratio && { inset: 0, position: 'absolute' }),
            ...(!disabledEffect && {
              opacity: 0,
              transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.standard,
              }),
              '&[complete], &[data-loaded="true"]': { opacity: 1 },
            }),
          }}
        />
      </Box>
    );
  }
);

Image.displayName = 'Image';

export default Image;
