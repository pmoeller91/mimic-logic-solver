import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { GenericGrid } from '../generic-grid/GenericGrid';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { generateContextLabel } from './generateContextLabel';
import { useTranslation } from 'react-i18next';

interface ChestGridProps {
  grid: ChestGridType;
}

function ChestGrid({ grid }: ChestGridProps) {
  const { t } = useTranslation();
  return (
    <GenericGrid
      grid={grid}
      className="w-full 2xl:w-1/2 lg:w-3/4 grid gap-1 p-1 sm:gap-2 sm:p-2 lg:gap-8 lg:p-8 m-auto"
    >
      {(chest, chestLocation, className, chestNumber) => (
        <ChestTileContainer
          chest={chest}
          location={chestLocation}
          className={className}
          key={`${chestLocation[0]}-${chestLocation[1]}`}
          contextLabel={generateContextLabel({
            totalChests: grid.numChests,
            chestNum: chestNumber,
            col: chestLocation[1] + 1,
            row: chestLocation[0] + 1,
            t,
          })}
        />
      )}
    </GenericGrid>
  );
}

export { ChestGrid };
export type { ChestGridProps };
