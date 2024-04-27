import { GameMode } from "@/types/gameMode";
import { atom } from "jotai";
import { initialState } from "./initialState";
import { handleGameModeChange } from "./handleGameModeChange";

const internalGameModeAtom = atom<GameMode>(initialState.gameInfo.gameMode);

const gameModeAtom = atom<GameMode, [GameMode], void>(
  (get) => get(internalGameModeAtom),
  (get, set, newGameMode) => {
    const oldGameMode = get(internalGameModeAtom);
    handleGameModeChange({ get, set, oldGameMode, newGameMode });
    set(internalGameModeAtom, newGameMode);
  },
);

export { gameModeAtom };
