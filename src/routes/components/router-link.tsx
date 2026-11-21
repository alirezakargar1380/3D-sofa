'use client';

import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import Link, { type LinkProps } from 'next/link';

// ----------------------------------------------------------------------

type RouterLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(({ ...other }, ref) => (
  <Link ref={ref} {...other} />
));

RouterLink.displayName = 'RouterLink';

export default RouterLink;
