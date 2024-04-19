import { debounce } from 'lodash-es';
import { RefObject, useLayoutEffect, useState } from 'react';
import { useMemo } from 'use-memo-one';

const isElemOverflowing = (elem: Element) =>
  elem.scrollHeight > elem.clientHeight;

/**
 * Returns whether the element referred to by the passed ref currently has a
 * vertical scrollbar active.
 */
const useIsOverflow = <T extends HTMLElement>(overflowRef: RefObject<T>) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const trigger = useMemo<ResizeObserverCallback>(
    () =>
      debounce<ResizeObserverCallback>((entries) => {
        entries.forEach((entry) => {
          setIsOverflow(isElemOverflowing(entry.target));
        });
      }, 50),
    []
  );

  const resizeObserver = useMemo(() => {
    if ('ResizeObserver' in window) {
      return new ResizeObserver(trigger);
    }
  }, [trigger]);

  useLayoutEffect(() => {
    const { current } = overflowRef;
    if (current) {
      resizeObserver?.observe(current);
      setIsOverflow(isElemOverflowing(current));
    }
    return () => {
      if (current) {
        resizeObserver?.unobserve(current);
      }
    };
  }, [resizeObserver, overflowRef]);

  return isOverflow;
};

export { useIsOverflow };
