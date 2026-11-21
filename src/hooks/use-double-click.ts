import { useRef, useCallback } from 'react';

// ----------------------------------------------------------------------

type Props = {
  timeout?: number;
  click?: (event: React.SyntheticEvent) => void;
  doubleClick: (event: React.SyntheticEvent) => void;
};

export function useDoubleClick({ click, doubleClick, timeout = 250 }: Props) {
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
        clickTimeout.current = null;
      }

      if (click && event.detail === 1) {
        clickTimeout.current = setTimeout(() => {
          click(event);
        }, timeout);
      }

      if (event.detail % 2 === 0) {
        doubleClick(event);
      }
    },
    [click, doubleClick, timeout]
  );
}
