import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { ChestGridFour } from './ChestGridFour';
import { ChestGridSeven } from './ChestGridSeven';
import { ChestGridSix } from './ChestGridSix';
import { ChestGridNine } from './ChestGridNine';

interface ChestGridProps {
  grid: ChestGridType;
}

function ChestGrid({ grid }: ChestGridProps) {
  switch (grid.numChests) {
    case 4:
      return <ChestGridFour grid={grid} />;
    case 6:
      return <ChestGridSix grid={grid} />;
    case 7:
      return <ChestGridSeven grid={grid} />;
    case 9:
      return <ChestGridNine grid={grid} />;
  }
  return null;
}

export { ChestGrid };
