import { allChestsAtom } from '@/atoms/allChestsAtom';
import { selectedChestAtom } from '@/atoms/selectedChestAtom';
import { useAtomValue } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { useMemo } from 'use-memo-one';

const useSelectedChestAtom = () => {
  const selectedChest = useAtomValue(selectedChestAtom);
  const focusedChestAtom = useMemo(
    () =>
      focusAtom(allChestsAtom, (optic) =>
        optic.nth(selectedChest[0]).nth(selectedChest[1])
      ),
    [selectedChest]
  );
  return focusedChestAtom;
};

export { useSelectedChestAtom };
