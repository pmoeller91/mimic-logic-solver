import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { MiniChestGridFour } from './MiniChestGridFour';
import { MiniChestGridSeven } from './MiniChestGridSeven';
import { MiniChestGridSix } from './MiniChestGridSix';
import { MiniChestGridNine } from './MiniChestGridNine';

interface MiniChestGridProps {
  grid: ChestGridType;
}

function MiniChestGrid({ grid }: MiniChestGridProps) {
  switch (grid.numChests) {
    case 4:
      return <MiniChestGridFour grid={grid} />;
    case 6:
      return <MiniChestGridSix grid={grid} />;
    case 7:
      return <MiniChestGridSeven grid={grid} />;
    case 9:
      return <MiniChestGridNine grid={grid} />;
  }
  return null;
}

export { MiniChestGrid };
