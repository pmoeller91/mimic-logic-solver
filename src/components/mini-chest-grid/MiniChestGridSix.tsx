import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridWrapper } from './MiniChestGridWrapper';
import { MiniChestIcon } from './MiniChestIcon';

interface MiniChestGridSixProps {
  grid: ChestGridSized<6>;
  className?: string;
}

function MiniChestGridSix({ grid, className }: MiniChestGridSixProps) {
  return (
    <MiniChestGridWrapper className={className}>
      <MiniChestIcon
        chestColor={grid.rows[0][0].color}
        className="col-span-2"
      />
      <MiniChestIcon
        chestColor={grid.rows[0][1].color}
        className="col-span-2"
      />
      <MiniChestIcon
        chestColor={grid.rows[0][2].color}
        className="col-span-2"
      />
      <MiniChestIcon
        chestColor={grid.rows[1][0].color}
        className="col-span-2"
      />
      <MiniChestIcon
        chestColor={grid.rows[1][1].color}
        className="col-span-2"
      />
      <MiniChestIcon
        chestColor={grid.rows[1][2].color}
        className="col-span-2"
      />
    </MiniChestGridWrapper>
  );
}

export { MiniChestGridSix };
