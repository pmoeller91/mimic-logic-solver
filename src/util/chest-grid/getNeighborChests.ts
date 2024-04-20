import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { CHEST_DIRECTION } from "@/types/chestHint";
import { getAdjacentChest } from "./getAdjacentChest";

interface GetNeighborChestsParams {
  chest: Chest,
  grid: ChestGrid,
}

/**
 * Returns the chests directly adjacent to a chest on the grid. In an orthogonal
 * grid, this is only those chests which are orthogonal (not diagonal). In a
 * hexagonal (7-chest) grid, this is those directly to the left/right, as well
 * as those diagonally adjacent. Order will be consistent, but is not guaranteed
 * to follow any pattern.
 */
const getNeighborChests = ({ chest, grid }: GetNeighborChestsParams): Chest[] => {
  const directions = Object.values(CHEST_DIRECTION);
  const neighborChests = directions.map((direction) => getAdjacentChest({ grid, chest, direction })).filter((chest): chest is Chest => chest !== null);
  return neighborChests;
}

export { getNeighborChests };
