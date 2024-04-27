import { GameInfo } from "@/types/state/gameInfo";
import { atom } from "jotai";
import { gameModeAtom } from "./gameModeAtom";
import { numChestsAtom } from "./numChestsAtom";
import { numMimicsAtom } from "./numMimicsFormValueAtom";
import { numGearAtom } from "./numGearFormValueAtom";
import { numGoldAtom } from "./numGoldFormValueAtom";
import { numItemsAtom } from "./numItemsFormValueAtom";
import { numRobbersAtom } from "./numRobbersFormValueAtom";

const gameInfoAtom = atom<GameInfo>((get) => ({
  gameMode: get(gameModeAtom),
  numChests: get(numChestsAtom),
  numMimics: get(numMimicsAtom),
  numGear: get(numGearAtom),
  numGold: get(numGoldAtom),
  numItems: get(numItemsAtom),
  numRobbers: get(numRobbersAtom),
}));

export { gameInfoAtom };
