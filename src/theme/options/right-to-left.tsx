import { useEffect, useMemo } from 'react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';

// ----------------------------------------------------------------------

type Props = {
  themeDirection: 'rtl' | 'ltr';
  children: React.ReactNode;
};

export default function RTL({ children, themeDirection }: Props) {
  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  // const cacheRtl = useMemo(
  //   () =>
  //     createCache({
  //       key: 'rtl',
  //       prepend: true,
  //       // @ts-expect-error stylis-plugin-rtl currently exposes an incompatible plugin type.
  //       stylisPlugins: [prefixer, rtlPlugin],
  //     }),
  //   []
  // );

  // if (themeDirection === 'rtl') {
  //   return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  // }

  return <>{children}</>;
}
