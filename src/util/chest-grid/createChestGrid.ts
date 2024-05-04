import { ChestGridSized, ValidGridSizes } from "@/types/chestGrid";
import { createChest } from "../createChest";
import { cloneDeep } from "lodash-es";

interface CreateChestGridParams<T extends ValidGridSizes> {
  numChests: T;
  initialRows?: ChestGridSized<T>["rows"];
}

function createChestGrid<T extends ValidGridSizes>({
  numChests,
  initialRows,
}: CreateChestGridParams<T>): ChestGridSized<T> {
  if (initialRows) {
    return cloneDeep({ numChests, rows: initialRows } as ChestGridSized<T>);
  }
  switch (numChests) {
    case 4:
      return {
        numChests: 4,
        rows: [
          [createChest(), createChest()],
          [createChest(), createChest()],
        ],
      } as ChestGridSized<T>;
    case 6:
      return {
        numChests,
        rows: [
          [createChest(), createChest(), createChest()],
          [createChest(), createChest(), createChest()],
        ],
      } as ChestGridSized<T>;
    case 7:
      return {
        numChests,
        rows: [
          [createChest(), createChest()],
          [createChest(), createChest(), createChest()],
          [createChest(), createChest()],
        ],
      } as ChestGridSized<T>;
    case 9:
      return {
        numChests,
        rows: [
          [createChest(), createChest(), createChest()],
          [createChest(), createChest(), createChest()],
          [createChest(), createChest(), createChest()],
        ],
      } as ChestGridSized<T>;
  }
  throw new RangeError("Invalid number of chests provided");
}

export { createChestGrid };
