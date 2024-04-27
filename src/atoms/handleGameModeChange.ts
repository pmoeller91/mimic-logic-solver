import { GAME_MODE, GameMode } from "@/types/gameMode";
import { AllChests, allChestsAtom } from "./allChestsAtom";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { CHEST_CONTENTS } from "@/types/chestContents";
import merge from "deepmerge";
import { Chest } from "@/types/chest";
import { Store } from "./store";
import { CHEST_HINT_TYPE, ChestHintType } from "@/types/chestHint";
import { getDefaultHint } from "@/util/getDefaultHint";

const hasRobber = (chest: Chest) =>
  chestContentIncludes({ chest, contents: CHEST_CONTENTS.robber });

const robberHints: ChestHintType[] = [
  CHEST_HINT_TYPE.colorNoRobber,
  CHEST_HINT_TYPE.colorRobber,
  CHEST_HINT_TYPE.directionNoRobber,
  CHEST_HINT_TYPE.directionRobber,
  CHEST_HINT_TYPE.rankNoRobber,
  CHEST_HINT_TYPE.rankRobber,
];

interface HandleGameModeChangeParams {
  get: Store["get"];
  set: Store["set"];
  oldGameMode: GameMode;
  newGameMode: GameMode;
}

const handleGameModeChange = ({
  get,
  set,
  oldGameMode,
  newGameMode,
}: HandleGameModeChangeParams) => {
  if (newGameMode === oldGameMode) {
    return;
  }

  if (oldGameMode === GAME_MODE.robbers) {
    const allChests = get(allChestsAtom);
    const allChestsNoRobberContent = merge({}, allChests).map((row) =>
      row.map((chest) =>
        hasRobber(chest) ? { ...chest, contents: CHEST_CONTENTS.unknown } : chest,
      ),
    ) as AllChests;
    const allChestsNoRobberHints = allChestsNoRobberContent.map((row) =>
      row.map((chest) =>
        robberHints.includes(chest.hint.type)
          ? { ...chest, hint: getDefaultHint(CHEST_HINT_TYPE.selfAsleep) }
          : chest,
      ),
    ) as AllChests;
    set(allChestsAtom, allChestsNoRobberHints);
  }
};

export { handleGameModeChange };
