import type { ImgHTMLAttributes } from 'react';

import type { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';

export type ImageProps = Omit<BoxProps, 'children'> &
  Pick<
    ImgHTMLAttributes<HTMLImageElement>,
    | 'alt'
    | 'src'
    | 'srcSet'
    | 'sizes'
    | 'loading'
    | 'decoding'
    | 'crossOrigin'
    | 'referrerPolicy'
    | 'onLoad'
    | 'onError'
  > & {
    overlay?: string;
    ratio?: ImageRatio;
    disabledEffect?: boolean;
  };
