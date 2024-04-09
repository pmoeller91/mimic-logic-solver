import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { SubGridProps } from './gridTypes';
import { useTranslation } from 'react-i18next';
import { generateContextLabel } from './generateContextLabel';

function ChestGridNine({ grid, onClickEditCallbacks }: SubGridProps<9>) {
  const { t } = useTranslation();
  const gridCoords = [
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
  return (
    <ChestGridWrapper>
      {gridCoords.map(([row, col], i) => (
        <ChestTileContainer
          chest={grid.rows[row][col]}
          onClickEdit={onClickEditCallbacks[row][col]}
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
