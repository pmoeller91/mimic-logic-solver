import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridFourProps {
  grid: ChestGridSized<4>;
  className?: string;
}

function MiniChestGridFour({ grid, className }: MiniChestGridFourProps) {
  return (
    <MiniChestGridWrapper className={className}>
      <MiniChestIcon color={grid.rows[0][0].color} className="col-span-3" />
      <MiniChestIcon color={grid.rows[0][1].color} className="col-span-3" />
      <MiniChestIcon color={grid.rows[1][0].color} className="col-span-3" />
      <MiniChestIcon color={grid.rows[1][1].color} className="col-span-3" />
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridFour };
