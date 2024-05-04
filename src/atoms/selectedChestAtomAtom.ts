import { atom } from "jotai";
import { selectedChestLocationAtom } from "./selectedChestLocationAtom";
import { allChestsAtom } from "./allChestsAtom";
import { focusAtom } from "jotai-optics";

const selectedChestAtomAtom = atom((get) => {
  const selectedChestLocation = get(selectedChestLocationAtom);
  return focusAtom(allChestsAtom, (optic) =>
    optic.nth(selectedChestLocation[0]).nth(selectedChestLocation[1]),
  );
});

export { selectedChestAtomAtom };
