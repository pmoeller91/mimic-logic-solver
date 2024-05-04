import { CHEST_CONTENTS, ChestContents } from "@/types/chestContents";
import { GetTranslationParams, TRANSLATION_TYPE } from "@/types/translation";

type GetChestContentsTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestContents,
  ChestContents | ChestContents[]
>;

const chestContentsTranslations: Record<ChestContents, string> = {
  [CHEST_CONTENTS.gear]: "chestContents.gear",
  [CHEST_CONTENTS.gold]: "chestContents.gold",
  [CHEST_CONTENTS.item]: "chestContents.item",
  [CHEST_CONTENTS.mimic]: "chestContents.mimic",
  [CHEST_CONTENTS.not_mimic]: "chestContents.notMimic",
  [CHEST_CONTENTS.robber]: "chestContents.robber",
  [CHEST_CONTENTS.unknown]: "chestContents.unknown",
};

function getChestContentsTranslation({ key, t }: GetChestContentsTranslationParams) {
  if (typeof key !== "string") {
    return "";
  }
  return t(chestContentsTranslations[key]);
}

export { getChestContentsTranslation, chestContentsTranslations };
export type { GetChestContentsTranslationParams };
