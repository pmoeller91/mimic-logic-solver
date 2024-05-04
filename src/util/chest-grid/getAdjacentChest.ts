import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { ChestDirection } from "@/types/chestHint";
import { getChestByLocation } from "./getChestByLocation";
import { getAdjacentChestLocation } from "./getAdjacentChestLocation";

interface GetAdjacentChestParams {
  grid: ChestGrid;
  chest: Chest;
  direction: ChestDirection;
}

function getAdjacentChest({ grid, chest, direction }: GetAdjacentChestParams): Chest | null {
  const location = getAdjacentChestLocation({ grid, chest, direction });
  if (location === null) {
    return null;
  }
  return getChestByLocation({ grid, location });
}

export { getAdjacentChestLocation, getAdjacentChest };
