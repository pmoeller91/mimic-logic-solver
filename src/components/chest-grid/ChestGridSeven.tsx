import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { SubGridProps } from './gridTypes';
import { useTranslation } from 'react-i18next';
import { generateContextLabel } from './generateContextLabel';

function ChestGridSeven({ grid, onClickEditCallbacks }: SubGridProps<7>) {
  const { t } = useTranslation();

  // undefined represents an empty div used as a grid spacer
  const gridCoordsWithChestNum = [
    undefined,
    [0, 0, 1],
    [0, 1, 2],
    undefined,
    [1, 0, 3],
    [1, 1, 4],
    [1, 2, 5],
    undefined,
    [2, 0, 6],
    [2, 1, 7],
    undefined,
  ] as const;

  return (
    <ChestGridWrapper>
      {gridCoordsWithChestNum.map((gridCoordWithChestNum, i) => {
        if (!gridCoordWithChestNum) {
          return <div key={`spacer-${i}`} />;
        }
        const [row, col, chestNum] = gridCoordWithChestNum;
        return (
          <ChestTileContainer
            // Must be defined, because the coords defined in the array
            // correspond to the limits of the grid
            chest={grid.rows[row][col]!}
            onClickEdit={onClickEditCallbacks[row][col]}
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
