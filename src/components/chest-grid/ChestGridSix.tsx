import { ChestGridSized } from '@/types/chestGrid';
import { ChestGridWrapper } from './ChestGridWrapper';
import { ChestGridRow } from './ChestGridRow';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface ChestGridSixProps {
  grid: ChestGridSized<6>;
  mini?: boolean;
}

function ChestGridSix({ grid }: ChestGridSixProps) {
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
    </ChestGridWrapper>
  );
}

export { ChestGridSix };
