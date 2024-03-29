import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestGridRow } from './ChestGridRow';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface ChestGridNineProps {
  grid: ChestGridSized<9>;
}

function ChestGridNine({ grid }: ChestGridNineProps) {
  return (
    <ChestGridWrapper>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[0][0]} />
        <ChestTileContainer chest={grid.rows[0][1]} />
        <ChestTileContainer chest={grid.rows[0][2]} />
      </ChestGridRow>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[1][0]} />
        <ChestTileContainer chest={grid.rows[1][1]} />
        <ChestTileContainer chest={grid.rows[1][2]} />
      </ChestGridRow>
      <ChestGridRow>
        <ChestTileContainer chest={grid.rows[2][0]} />
        <ChestTileContainer chest={grid.rows[2][1]} />
        <ChestTileContainer chest={grid.rows[2][2]} />
      </ChestGridRow>
    </ChestGridWrapper>
  );
}

export { ChestGridNine };
