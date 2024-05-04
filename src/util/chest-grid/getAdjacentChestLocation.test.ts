import { describe, expect, it } from "vitest";
import { createChest } from "../createChest";
import { createChestGrid } from "./createChestGrid";
import { getAdjacentChestLocation } from "./getAdjacentChestLocation";
import { CHEST_DIRECTION } from "@/types/chestHint";
import { ChestGrid } from "@/types/chestGrid";
import { ChestLocation } from "@/types/chestLocation";
import { Chest } from "@/types/chest";
import { CHEST_COLOR } from "@/types/chestColor";

function replaceChest({
  grid,
  location,
  chest,
}: {
  grid: ChestGrid;
  location: ChestLocation;
  chest: Chest;
}) {
  const [row, col] = location;
  grid.rows[row][col] = chest;
  return grid;
}

describe("getAdjacentChestLocation", () => {
  describe("if the provided chest is not in the grid", () => {
    it("should return null", () => {
      const chestNotInGrid = createChest();
      const grid = createChestGrid({ numChests: 9 });
      expect(
        getAdjacentChestLocation({
          grid,
          chest: chestNotInGrid,
          direction: CHEST_DIRECTION.left,
        }),
      ).toEqual(null);
    });
  });
  describe("if the provided chest is in the grid", () => {
    it("should return the location in the provided direction if it is within the grid", () => {
      const chestInGrid = createChest();
      const location: ChestLocation = [1, 1];
      const adjacentLocation: ChestLocation = [1, 2];
      const direction = CHEST_DIRECTION.right;
      const grid = createChestGrid({ numChests: 9 });
      replaceChest({ grid, location, chest: chestInGrid });
      expect(getAdjacentChestLocation({ grid, chest: chestInGrid, direction })).toEqual(
        adjacentLocation,
      );
    });
    it("should return null if the location in the provided direction is outside the grid", () => {
      const chestInGrid = createChest({ color: CHEST_COLOR.black });
      const location: ChestLocation = [1, 2];
      const direction = CHEST_DIRECTION.right;
      const grid = createChestGrid({ numChests: 9 });
      replaceChest({ grid, location, chest: chestInGrid });
      expect(getAdjacentChestLocation({ grid, chest: chestInGrid, direction })).toEqual(null);
    });
    it("should return null if provided an invalid direction for the grid", () => {
      const chestInGrid = createChest();
      const location: ChestLocation = [1, 1];
      const direction = CHEST_DIRECTION.downRight;
      const grid = createChestGrid({ numChests: 9 });
      replaceChest({ grid, location, chest: chestInGrid });
      expect(getAdjacentChestLocation({ grid, chest: chestInGrid, direction })).toEqual(null);
    });
  });
});
