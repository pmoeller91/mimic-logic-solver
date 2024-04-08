import { OnClickEditCallback } from '@/components/chest-grid/ChestGrid';
import { useMemo } from 'use-memo-one';

const useChestGridCallbacks = (callback?: OnClickEditCallback) => {
  return useMemo(() => {
    const defaultedCallback =
      callback ??
      (() => {
        return;
      });
    return [
      [
        defaultedCallback.bind(null, 0, 0),
        defaultedCallback.bind(null, 0, 1),
        defaultedCallback.bind(null, 0, 2),
      ],
      [
        defaultedCallback.bind(null, 1, 0),
        defaultedCallback.bind(null, 1, 1),
        defaultedCallback.bind(null, 1, 2),
      ],
      [
        defaultedCallback.bind(null, 2, 0),
        defaultedCallback.bind(null, 2, 1),
        defaultedCallback.bind(null, 2, 2),
      ],
    ] as const;
  }, [callback]);
};

type ChestGridCallbacks = ReturnType<typeof useChestGridCallbacks>;

export { useChestGridCallbacks };
export type { ChestGridCallbacks };
