import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestGridRow } from './MiniChestGridRow';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridSixProps {
  grid: ChestGridSized<6>;
  mini?: boolean;
}

function MiniChestGridSix({ grid }: MiniChestGridSixProps) {
  return (
    <MiniChestGridWrapper>
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[0][0].color} />
        <MiniChestIcon color={grid.rows[0][1].color} />
        <MiniChestIcon color={grid.rows[0][2].color} />
      </MiniChestGridRow>
      <MiniChestGridRow>
        <MiniChestIcon color={grid.rows[1][0].color} />
        <MiniChestIcon color={grid.rows[1][1].color} />
        <MiniChestIcon color={grid.rows[1][2].color} />
      </MiniChestGridRow>
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridSix };