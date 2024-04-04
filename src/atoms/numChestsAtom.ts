import { atom } from "jotai";
import { initialState } from "./initialState";
import { ValidGridSizes } from "@/types/chestGrid";

const numChestsAtom = atom<ValidGridSizes>(initialState.gameInfo.numChests);

export { numChestsAtom };
