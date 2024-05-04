import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { CHEST_DIRECTION, ChestDirection } from "@/types/chestHint";
import { getAdjacentChest } from "./getAdjacentChest";

interface GetValidDirectionParams {
  grid: ChestGrid;
  chest: Chest;
}

/**
 * Gets the directions relative to a chest where another chest on the grid exists.
 */
const getValidDirections = ({ grid, chest }: GetValidDirectionParams): ChestDirection[] =>
  Object.values(CHEST_DIRECTION).filter(
    (direction) => !!getAdjacentChest({ grid, chest, direction }),
  );

export { getValidDirections };
