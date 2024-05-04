import { ChestContents } from "@/types/chestContents";
import { GetTranslationParams, TRANSLATION_TYPE } from "@/types/translation";
import { chestContentsTranslations } from "./getChestContentsTranslation";

type GetChestContentsSelectTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestContentsSelect,
  ChestContents | ChestContents[]
>;

function getChestContentsSelectTranslation({ key, t }: GetChestContentsSelectTranslationParams) {
  if (typeof key !== "string") {
    return "";
  }
  return t(chestContentsTranslations[key], { context: "select" });
}

export { getChestContentsSelectTranslation };
export type { GetChestContentsSelectTranslationParams };
