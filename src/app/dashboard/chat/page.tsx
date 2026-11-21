import { Suspense } from 'react';

import { SplashScreen } from 'src/components/loading-screen';

import { ChatView } from 'src/sections/chat/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Chat',
};

export default function ChatPage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <ChatView />
    </Suspense>
  );
}
