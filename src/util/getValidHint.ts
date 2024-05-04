import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { ChestHint } from "@/types/chestHint";
import merge from "deepmerge";
import { isChestDirection } from "./isChestDirection";
import { directionOptions } from "@/components/edit-chest-info/chest-hint-section/param-field/directionOptions";
import { getAdjacentChest } from "./chest-grid/getAdjacentChest";
import { isChestRank } from "./isChestRank";
import { rankOptions } from "@/components/edit-chest-info/chest-hint-section/param-field/rankOptions";
import { getValidRanks } from "./chest-grid/getValidRanks";

interface GetValidHintParams {
  hint: ChestHint;
  chest: Chest;
  grid: ChestGrid;
}

/**
 * Ensures a hint has valid parameters based on the given chest and grid.
 */
const getValidHint = ({ hint, chest, grid }: GetValidHintParams) => {
  const validHint = merge<ChestHint>({}, hint);
  validHint.params = validHint.params.map((param) => {
    if (isChestDirection(param)) {
      return (
        directionOptions.find((direction) => !!getAdjacentChest({ grid, chest, direction })) ??
        param
      );
    }
    if (isChestRank(param)) {
      const validRanks = getValidRanks({ numChests: grid.numChests });
      return rankOptions.find((rank) => validRanks.includes(rank)) ?? param;
    }
    return param;
  }) as typeof validHint.params;
  return validHint;
};

export { getValidHint };
