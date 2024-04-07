import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface ChestGridSevenProps {
  grid: ChestGridSized<7>;
}

function ChestGridSeven({ grid }: ChestGridSevenProps) {
  return (
    <ChestGridWrapper>
      <div />
      <ChestTileContainer chest={grid.rows[0][0]} className="col-span-2" />
      <ChestTileContainer chest={grid.rows[0][1]} className="col-span-2" />
      <div />
      <ChestTileContainer chest={grid.rows[1][0]} className="col-span-2" />
      <ChestTileContainer chest={grid.rows[1][1]} className="col-span-2" />
      <ChestTileContainer chest={grid.rows[1][2]} className="col-span-2" />
      <div />
      <ChestTileContainer chest={grid.rows[2][0]} className="col-span-2" />
      <ChestTileContainer chest={grid.rows[2][1]} className="col-span-2" />
      <div />
    </ChestGridWrapper>
  );
}

export { ChestGridSeven };
