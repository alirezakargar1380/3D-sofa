import { Suspense } from 'react';

import { SplashScreen } from 'src/components/loading-screen';

import { MailView } from 'src/sections/mail/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Mail',
};

export default function MailPage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <MailView />
    </Suspense>
  );
}
