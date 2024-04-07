import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridSevenProps {
  grid: ChestGridSized<7>;
  className?: string;
}

function MiniChestGridSeven({ grid, className }: MiniChestGridSevenProps) {
  return (
    <MiniChestGridWrapper className={className}>
      <div />
      <MiniChestIcon color={grid.rows[0][0].color} className="col-span-2" />
      <MiniChestIcon color={grid.rows[0][1].color} className="col-span-2" />
      <div />
      <MiniChestIcon color={grid.rows[1][0].color} className="col-span-2" />
      <MiniChestIcon color={grid.rows[1][1].color} className="col-span-2" />
      <MiniChestIcon color={grid.rows[1][2].color} className="col-span-2" />
      <div />
      <MiniChestIcon color={grid.rows[2][0].color} className="col-span-2" />
      <MiniChestIcon color={grid.rows[2][1].color} className="col-span-2" />
      <div />
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridSeven };
