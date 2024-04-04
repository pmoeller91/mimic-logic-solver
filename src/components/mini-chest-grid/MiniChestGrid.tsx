import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { MiniChestGridFour } from './MiniChestGridFour';
import { MiniChestGridSeven } from './MiniChestGridSeven';
import { MiniChestGridSix } from './MiniChestGridSix';
import { MiniChestGridNine } from './MiniChestGridNine';

interface MiniChestGridProps {
  grid: ChestGridType;
  className?: string;
}

function MiniChestGrid({ grid, className }: MiniChestGridProps) {
  switch (grid.numChests) {
    case 4:
      return <MiniChestGridFour grid={grid} className={className} />;
    case 6:
      return <MiniChestGridSix grid={grid} className={className} />;
    case 7:
      return <MiniChestGridSeven grid={grid} className={className} />;
    case 9:
      return <MiniChestGridNine grid={grid} className={className} />;
  }
  return null;
}

export { MiniChestGrid };
