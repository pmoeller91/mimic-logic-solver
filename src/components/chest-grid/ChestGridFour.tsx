import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { SubGridProps } from './gridTypes';
import { generateContextLabel } from './generateContextLabel';
import { useTranslation } from 'react-i18next';

function ChestGridFour({ grid, onClickEditCallbacks }: SubGridProps<4>) {
  const { t } = useTranslation();
  const gridCoords = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  return (
    <ChestGridWrapper>
      {gridCoords.map(([row, col], i) => (
        <ChestTileContainer
          chest={grid.rows[row][col]}
          onClickEdit={onClickEditCallbacks[row][col]}
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
