import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { SubGridProps } from './gridTypes';
import { useTranslation } from 'react-i18next';
import { generateContextLabel } from './generateContextLabel';
import { ChestLocation } from '@/types/chestLocation';

const chestLocations: ChestLocation[] = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

function ChestGridNine({ grid }: SubGridProps<9>) {
  const { t } = useTranslation();
  return (
    <ChestGridWrapper>
      {chestLocations.map(([row, col], i, arr) => (
        <ChestTileContainer
          location={arr[i]}
          chest={grid.rows[row][col]}
          className="col-span-2"
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

export { ChestGridNine };
