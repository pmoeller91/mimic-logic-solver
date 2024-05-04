import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { ChestDirection } from "@/types/chestHint";
import { ChestLocation } from "@/types/chestLocation";
import { getChestLocation } from "./getChestLocation";
import { getAdjacentChestLocationOrtho } from "./getAdjacentChestLocationOrtho";
import { getAdjacentChestLocationHex } from "./getAdjacentChestLocationHex";

interface GetAdjacentChestLocationParams {
  grid: ChestGrid;
  chest: Chest;
  direction: ChestDirection;
}

function getAdjacentChestLocation({
  grid,
  chest,
  direction,
}: GetAdjacentChestLocationParams): ChestLocation | null {
  const location = getChestLocation({ grid, chest });
  if (location === null) {
    return null;
  }
  if (grid.numChests === 4 || grid.numChests === 6 || grid.numChests === 9) {
    return getAdjacentChestLocationOrtho({
      location,
      direction,
      numChests: grid.numChests,
    });
  }
  if (grid.numChests === 7) {
    return getAdjacentChestLocationHex({ location, direction });
  }
  return null;
}

export { getAdjacentChestLocation };
