import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { ChestGridCallbacks } from '@/hooks/useChestGridCallbacks';

interface ChestGridFourProps {
  grid: ChestGridSized<4>;
  onClickEditCallbacks: ChestGridCallbacks;
}

function ChestGridFour({ grid, onClickEditCallbacks }: ChestGridFourProps) {
  return (
    <ChestGridWrapper>
      <ChestTileContainer
        chest={grid.rows[0][0]}
        onClickEdit={onClickEditCallbacks[0][0]}
        className="col-span-3"
      />
      <ChestTileContainer
        chest={grid.rows[0][1]}
        onClickEdit={onClickEditCallbacks[0][1]}
        className="col-span-3"
      />
      <ChestTileContainer
        chest={grid.rows[1][0]}
        onClickEdit={onClickEditCallbacks[1][0]}
        className="col-span-3"
      />
      <ChestTileContainer
        chest={grid.rows[1][1]}
        onClickEdit={onClickEditCallbacks[1][1]}
        className="col-span-3"
      />
    </ChestGridWrapper>
  );
}

export { ChestGridFour };
