import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestGridRow } from './ChestGridRow';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface ChestGridSevenProps {
  grid: ChestGridSized<7>;
}

function ChestGridSeven({ grid }: ChestGridSevenProps) {
  return (
    <ChestGridWrapper>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[0][0]} />
        <ChestTileContainer chest={grid.rows[0][1]} />
      </ChestGridRow>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[1][0]} />
        <ChestTileContainer chest={grid.rows[1][1]} />
        <ChestTileContainer chest={grid.rows[1][2]} />
      </ChestGridRow>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[2][0]} />
        <ChestTileContainer chest={grid.rows[2][1]} />
      </ChestGridRow>
    </ChestGridWrapper>
  );
}

export { ChestGridSeven };
