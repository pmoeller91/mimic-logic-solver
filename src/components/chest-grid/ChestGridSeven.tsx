import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { ChestGridCallbacks } from '@/hooks/useChestGridCallbacks';

interface ChestGridSevenProps {
  grid: ChestGridSized<7>;
  onClickEditCallbacks: ChestGridCallbacks;
}

function ChestGridSeven({ grid, onClickEditCallbacks }: ChestGridSevenProps) {
  return (
    <ChestGridWrapper>
      <div />
      <ChestTileContainer
        chest={grid.rows[0][0]}
        onClickEdit={onClickEditCallbacks[0][0]}
        className="col-span-2"
      />
      <ChestTileContainer
        chest={grid.rows[0][1]}
        onClickEdit={onClickEditCallbacks[0][1]}
        className="col-span-2"
      />
      <div />
      <ChestTileContainer
        chest={grid.rows[1][0]}
        onClickEdit={onClickEditCallbacks[1][0]}
        className="col-span-2"
      />
      <ChestTileContainer
        chest={grid.rows[1][1]}
        onClickEdit={onClickEditCallbacks[1][1]}
        className="col-span-2"
      />
      <ChestTileContainer
        chest={grid.rows[1][2]}
        onClickEdit={onClickEditCallbacks[1][2]}
        className="col-span-2"
      />
      <div />
      <ChestTileContainer
        chest={grid.rows[2][0]}
        onClickEdit={onClickEditCallbacks[2][0]}
        className="col-span-2"
      />
      <ChestTileContainer
        chest={grid.rows[2][1]}
        onClickEdit={onClickEditCallbacks[2][1]}
        className="col-span-2"
      />
      <div />
    </ChestGridWrapper>
  );
}

export { ChestGridSeven };
