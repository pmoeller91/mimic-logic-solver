import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { GameInfo } from "@/types/state/gameInfo";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { GAME_MODE } from "@/types/gameMode";
import { ChestColor } from "@/types/chestColor";

interface IsTruthfulParams {
  chest: Chest;
  grid: ChestGrid;
  gameInfo: GameInfo;
}

const getIsTruthful = ({ chest, gameInfo, grid }: IsTruthfulParams) => {
  if (gameInfo.gameMode === GAME_MODE.doubt) {
    if (chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic })) {
      return true;
    }
    const mimicColors = new Set<ChestColor>();
    grid.rows
      .flat()
      .filter((gridChest) =>
        chestContentIncludes({ chest: gridChest, contents: CHEST_CONTENTS.mimic }),
      )
      .forEach((mimicChest) => mimicColors.add(mimicChest.color));
    return !mimicColors.has(chest.color);
  }
  if (gameInfo.gameMode === GAME_MODE.confuse) {
    return !(chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic }) || chest.isConfused);
  }
  return !chestContentIncludes({
    chest,
    contents: CHEST_CONTENTS.mimic,
  });
};

export { getIsTruthful };
