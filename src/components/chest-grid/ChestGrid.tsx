import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { ChestGridFour } from './ChestGridFour';
import { ChestGridSeven } from './ChestGridSeven';
import { ChestGridSix } from './ChestGridSix';
import { ChestGridNine } from './ChestGridNine';
import { useChestGridCallbacks } from '@/hooks/useChestGridCallbacks';

type OnClickEditCallback = (row: 0 | 1 | 2, col: 0 | 1 | 2) => void;

interface ChestGridProps {
  grid: ChestGridType;
  onClickEdit?: OnClickEditCallback;
}

function ChestGrid({ grid, onClickEdit }: ChestGridProps) {
  const onClickEditCallbacks = useChestGridCallbacks(onClickEdit);
  switch (grid.numChests) {
    case 4:
      return (
        <ChestGridFour
          grid={grid}
          onClickEditCallbacks={onClickEditCallbacks}
        />
      );
    case 6:
      return (
        <ChestGridSix grid={grid} onClickEditCallbacks={onClickEditCallbacks} />
      );
    case 7:
      return (
        <ChestGridSeven
          grid={grid}
          onClickEditCallbacks={onClickEditCallbacks}
        />
      );
    case 9:
      return (
        <ChestGridNine
          grid={grid}
          onClickEditCallbacks={onClickEditCallbacks}
        />
      );
  }
  return null;
}

export { ChestGrid };
export type { OnClickEditCallback, ChestGridProps };
