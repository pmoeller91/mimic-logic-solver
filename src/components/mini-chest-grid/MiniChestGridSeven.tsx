import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestGridRow } from './MiniChestGridRow';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridSevenProps {
  grid: ChestGridSized<7>;
  className?: string;
}

function MiniChestGridSeven({ grid, className }: MiniChestGridSevenProps) {
  return (
    <MiniChestGridWrapper className={className}>
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[0][0].color} />
        <MiniChestIcon color={grid.rows[0][1].color} />
      </MiniChestGridRow>
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[1][0].color} />
        <MiniChestIcon color={grid.rows[1][1].color} />
        <MiniChestIcon color={grid.rows[1][2].color} />
      </MiniChestGridRow>
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[2][0].color} />
        <MiniChestIcon color={grid.rows[2][1].color} />
      </MiniChestGridRow>
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridSeven };
