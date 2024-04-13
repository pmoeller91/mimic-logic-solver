import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { SubGridProps } from './gridTypes';
import { generateContextLabel } from './generateContextLabel';
import { useTranslation } from 'react-i18next';
import { ChestLocation } from '@/types/chestLocation';

const chestLocations: ChestLocation[] = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

function ChestGridFour({ grid }: SubGridProps<4>) {
  const { t } = useTranslation();
  return (
    <ChestGridWrapper>
      {chestLocations.map(([row, col], i, arr) => (
        <ChestTileContainer
          chest={grid.rows[row][col]}
          location={arr[i]}
          className="col-span-3"
          key={`${row}-${col}`}
          contextLabel={generateContextLabel({
            totalChests: 4,
            chestNum: i + 1,
            col: col + 1,
            row: row + 1,
            t,
          })}
        />
      ))}
    </ChestGridWrapper>
  );
}

export { ChestGridFour };
