import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridNineProps {
  grid: ChestGridSized<9>;
  className?: string;
}

function MiniChestGridNine({ grid, className }: MiniChestGridNineProps) {
  return (
    <MiniChestGridWrapper className={className}>
        <MiniChestIcon color={grid.rows[0][0].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[0][1].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[0][2].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[1][0].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[1][1].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[1][2].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[2][0].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[2][1].color} className="col-span-2" />
        <MiniChestIcon color={grid.rows[2][2].color} className="col-span-2" />
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridNine };
