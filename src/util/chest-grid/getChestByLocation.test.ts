import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { ChestLocation } from "@/types/chestLocation";
import { CHEST_COLOR } from "@/types/chestColor";
import { describe, expect, it } from "vitest";
import { getChestByLocation } from "./getChestByLocation";
import { createChest } from "../createChest";

function fillerChest(): Chest {
  return createChest();
}

describe("getChestByLocation", () => {
  it("should return the corresponding chest if the location is within the grid", () => {
    const chest: Chest = createChest({ color: CHEST_COLOR.blue });
    const chestLocation: ChestLocation = [1, 0];
    const chestGrid: ChestGrid = {
      numChests: 4,
      rows: [
        [fillerChest(), fillerChest()],
        [chest, fillerChest()],
      ],
    };
    expect(getChestByLocation({ grid: chestGrid, location: chestLocation })).toBe(chest);
  });
  it("should return null if the location is outside the grid", () => {
    const chestLocation: ChestLocation = [1, 2];
    const chestGrid: ChestGrid = {
      numChests: 4,
      rows: [
        [fillerChest(), fillerChest()],
        [fillerChest(), fillerChest()],
      ],
    };
    expect(getChestByLocation({ grid: chestGrid, location: chestLocation })).toEqual(null);
  });
});
