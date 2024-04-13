import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { SubGridProps } from './gridTypes';
import { useTranslation } from 'react-i18next';
import { generateContextLabel } from './generateContextLabel';
import { ChestLocation } from '@/types/chestLocation';

// undefined represents an empty div used as a grid spacer
const chestLocationWithChestNum: (undefined | [ChestLocation, number])[] = [
  undefined,
  [[0, 0], 1],
  [[0, 1], 2],
  undefined,
  [[1, 0], 3],
  [[1, 1], 4],
  [[1, 2], 5],
  undefined,
  [[2, 0], 6],
  [[2, 1], 7],
  undefined,
] as const;

function ChestGridSeven({ grid }: SubGridProps<7>) {
  const { t } = useTranslation();
  return (
    <ChestGridWrapper>
      {chestLocationWithChestNum.map((gridCoordWithChestNum, i) => {
        if (!gridCoordWithChestNum) {
          return <div key={`spacer-${i}`} />;
        }
        const [[row, col], chestNum] = gridCoordWithChestNum;
        return (
          <ChestTileContainer
            location={gridCoordWithChestNum[0]}
            chest={grid.rows[row][col]}
            className="col-span-2"
            key={`${row}-${col}`}
            contextLabel={generateContextLabel({
              totalChests: 4,
              chestNum,
              col: col + 1,
              row: row + 1,
              t,
            })}
          />
        );
      })}
    </ChestGridWrapper>
  );
}

export { ChestGridSeven };
