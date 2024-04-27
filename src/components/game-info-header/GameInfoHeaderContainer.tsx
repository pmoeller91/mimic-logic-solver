import { GameInfoHeaderView } from "./GameInfoHeaderView";
import { mapValues } from "lodash-es";
import { useMemo } from "react";
import { TRANSLATION_TYPE } from "@/types/translation";
import { GAME_MODE } from "@/types/gameMode";
import { useTranslation } from "react-i18next";
import { getGameTranslation } from "@/util/getGameTranslation";
import { useAtomValue } from "jotai";
import { numMimicsAtom } from "@/atoms/numMimicsFormValueAtom";
import { numGoldAtom } from "@/atoms/numGoldFormValueAtom";
import { numItemsAtom } from "@/atoms/numItemsFormValueAtom";
import { numChestsAtom } from "@/atoms/numChestsAtom";
import { numGearAtom } from "@/atoms/numGearFormValueAtom";
import { gameModeAtom } from "@/atoms/gameModeAtom";
import { numRobbersAtom } from "@/atoms/numRobbersFormValueAtom";

const headerTranslationKeys = {
  gameMode: "header.gameMode",
  chests: "header.chests",
  mimics: "header.mimics",
  gold: "header.gold",
  gear: "header.gear",
  items: "header.items",
  robbers: "header.robbers",
};

function GameInfoHeaderContainer() {
  const { t } = useTranslation();
  const translatedHeaders = useMemo(() => mapValues(headerTranslationKeys, (key) => t(key)), [t]);
  const gameMode = useAtomValue(gameModeAtom);
  const numMimics = useAtomValue(numMimicsAtom);
  const numGear = useAtomValue(numGearAtom);
  const numGold = useAtomValue(numGoldAtom);
  const numItems = useAtomValue(numItemsAtom);
  const numChests = useAtomValue(numChestsAtom);
  const numRobbers = useAtomValue(numRobbersAtom);

  const gameModeTranslation = useMemo(
    () =>
      getGameTranslation({
        type: TRANSLATION_TYPE.gameMode,
        key: gameMode,
        t,
      }),
    [t, gameMode],
  );

  const numChestsTranslation = t("header.numChests", { numChests });

  const unknownHeaderValue = t("header.unknownValue");

  let numMimicsTranslation = "";
  let numGearTranslation = "";
  let numGoldTranslation = "";
  let numItemsTranslation = "";

  if (gameMode === GAME_MODE.random) {
    numMimicsTranslation = unknownHeaderValue;
    numGearTranslation = unknownHeaderValue;
    numGoldTranslation = unknownHeaderValue;
    numItemsTranslation = unknownHeaderValue;
  } else {
    numMimicsTranslation = t("header.numMimics", { numMimics });
    numGearTranslation = numGear ? t("header.numGear", { numGear }) : unknownHeaderValue;
    numGoldTranslation = numGold ? t("header.numGold", { numGold }) : unknownHeaderValue;
    numItemsTranslation = numItems ? t("header.numItems", { numItems }) : unknownHeaderValue;
  }

  const showRobbers = gameMode === GAME_MODE.robbers;
  const robbersTranslation = t("header.numRobbers", { numRobbers });

  return (
    <GameInfoHeaderView
      gameModeHeader={translatedHeaders.gameMode}
      gameMode={gameModeTranslation}
      chestsHeader={translatedHeaders.chests}
      chests={numChestsTranslation}
      gearHeader={translatedHeaders.gear}
      gear={numGearTranslation}
      goldHeader={translatedHeaders.gold}
      gold={numGoldTranslation}
      itemsHeader={translatedHeaders.items}
      items={numItemsTranslation}
      mimicsHeader={translatedHeaders.mimics}
      mimics={numMimicsTranslation.toString()}
      robbersHeader={translatedHeaders.robbers}
      robbers={robbersTranslation}
      showRobbers={showRobbers}
    />
  );
}

export { GameInfoHeaderContainer };
