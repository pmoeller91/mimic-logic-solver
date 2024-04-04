import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestGridRow } from './MiniChestGridRow';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridFourProps {
  grid: ChestGridSized<4>;
  className?: string;
}

function MiniChestGridFour({ grid, className }: MiniChestGridFourProps) {
  return (
    <MiniChestGridWrapper className={className} >
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[0][0].color} />
        <MiniChestIcon color={grid.rows[0][1].color} />
      </MiniChestGridRow>
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[1][0].color} />
        <MiniChestIcon color={grid.rows[1][1].color} />
      </MiniChestGridRow>
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridFour };
