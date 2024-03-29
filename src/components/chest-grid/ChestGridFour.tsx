import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestGridRow } from './ChestGridRow';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface ChestGridFourProps {
  grid: ChestGridSized<4>;
}

function ChestGridFour({ grid }: ChestGridFourProps) {
  return (
    <ChestGridWrapper>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[0][0]} />
        <ChestTileContainer chest={grid.rows[0][1]} />
      </ChestGridRow>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[1][0]} />
        <ChestTileContainer chest={grid.rows[1][1]} />
      </ChestGridRow>
    </ChestGridWrapper>
  );
}

export { ChestGridFour };
