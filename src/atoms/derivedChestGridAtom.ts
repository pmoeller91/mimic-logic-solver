import { ChestGrid, ChestGridSized, ValidGridSizes } from "@/types/chestGrid";
import { atom } from "jotai";
import { numChestsAtom } from "./numChestsAtom";
import { AllChests, allChestsAtom } from "./allChestsAtom";

function createRows<T extends ValidGridSizes>(
  numChests: T,
  chests: AllChests,
): ChestGridSized<T>["rows"] {
  switch (numChests) {
    case 4:
      return [
        [chests[0][0], chests[0][1]],
        [chests[1][0], chests[1][1]],
      ] satisfies ChestGridSized<4>["rows"];
    case 6:
      return [
        [chests[0][0], chests[0][1], chests[0][2]],
        [chests[1][0], chests[1][1], chests[1][2]],
      ] satisfies ChestGridSized<6>["rows"];
    case 7:
      return [
        [chests[0][0], chests[0][1]],
        [chests[1][0], chests[1][1], chests[1][2]],
        [chests[2][0], chests[2][1]],
      ] satisfies ChestGridSized<7>["rows"];
    default:
    case 9:
      return [
        [chests[0][0], chests[0][1], chests[0][2]],
        [chests[1][0], chests[1][1], chests[1][2]],
        [chests[2][0], chests[2][1], chests[2][2]],
      ] satisfies ChestGridSized<9>["rows"];
  }
}

const derivedChestGridAtom = atom<ChestGrid>((get) => {
  const numChests = get(numChestsAtom);
  const allChests = get(allChestsAtom);
  const rows = createRows(numChests, allChests);
  return {
    numChests,
    rows,
  } as ChestGrid;
});

export { derivedChestGridAtom };
