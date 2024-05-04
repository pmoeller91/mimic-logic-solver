import { ChestGrid as ChestGridType } from "@/types/chestGrid";
import { GenericGrid } from "../generic-grid/GenericGrid";
import { MiniChestIcon } from "./MiniChestIcon";
import clsx from "clsx";

interface MiniChestGridProps {
  grid: ChestGridType;
  className?: string;
}

function MiniChestGrid({ grid, className }: MiniChestGridProps) {
  return (
    <GenericGrid grid={grid} className={clsx("gap-1", className)}>
      {(chest, _chestLocation, chestClassName, chestNumber) => (
        <MiniChestIcon
          chestColor={chest.color}
          className={chestClassName}
          key={`mini-chest-${chestNumber}`}
        />
      )}
    </GenericGrid>
  );
}

export { MiniChestGrid };
