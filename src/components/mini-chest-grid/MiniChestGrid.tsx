import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { GenericGrid } from '../generic-grid/GenericGrid';
import { MiniChestIcon } from './MiniChestIcon';
import clsx from 'clsx';

interface MiniChestGridProps {
  grid: ChestGridType;
  className?: string;
}

function MiniChestGrid({ grid, className }: MiniChestGridProps) {
  return (
    <GenericGrid gridSize={grid.numChests} className={clsx('gap-1', className)}>
      {(chestLocation, className, chestNumber) => (
        <MiniChestIcon
          chestColor={grid.rows[chestLocation[0]][chestLocation[1]].color}
          className={className}
          key={`mini-chest-${chestNumber}`}
        />
      )}
    </GenericGrid>
  );
}

export { MiniChestGrid };
