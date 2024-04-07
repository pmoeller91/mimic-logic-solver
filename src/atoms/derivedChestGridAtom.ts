import { ChestGrid, ChestGridSized, ValidGridSizes } from '@/types/chestGrid';
import { atom } from 'jotai';
import { numChestsAtom } from './numChestsAtom';
import { AllChests, allChestsAtom } from './allChestsAtom';

function createRows<T extends ValidGridSizes>(
  numChests: T,
  chests: AllChests
): ChestGridSized<T>['rows'] {
  switch (numChests) {
    case 4:
      return [
        [chests[0], chests[1]],
        [chests[3], chests[4]],
      ];
    case 6:
      return [
        [chests[0], chests[1], chests[2]],
        [chests[3], chests[4], chests[5]],
      ];
    case 7:
      return [
        [chests[0], chests[1]],
        [chests[3], chests[4], chests[5]],
        [chests[6], chests[7]],
      ];
    default:
    case 9:
      return [
        [chests[0], chests[1], chests[2]],
        [chests[3], chests[4], chests[5]],
        [chests[6], chests[7], chests[8]],
      ];
  }
}

const derivedChestGridAtom = atom<ChestGrid>((get) => {
  const numChests = get(numChestsAtom);
  const allChests = get(allChestsAtom);
  const rows = createRows(numChests, allChests);
  return {
    numChests,
    rows,
  } as ChestGrid;
});

export { derivedChestGridAtom };
