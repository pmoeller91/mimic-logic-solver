import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface ChestGridFourProps {
  grid: ChestGridSized<4>;
}

function ChestGridFour({ grid }: ChestGridFourProps) {
  return (
    <ChestGridWrapper>
      <ChestTileContainer chest={grid.rows[0][0]} className="col-span-3" />
      <ChestTileContainer chest={grid.rows[0][1]} className="col-span-3" />
      <ChestTileContainer chest={grid.rows[1][0]} className="col-span-3" />
      <ChestTileContainer chest={grid.rows[1][1]} className="col-span-3" />
    </ChestGridWrapper>
  );
}

export { ChestGridFour };
