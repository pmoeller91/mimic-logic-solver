import { ChestHint } from "@/types/chestHint";
import { GetTranslationParams, TRANSLATION_TYPE } from "@/types/translation";
import { chestHintTranslations } from "./chestHintTranslations";

type GetChestHintTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestHint,
  ChestHint
>;

function getChestHintTranslation({ key, t }: GetChestHintTranslationParams) {
  return t(chestHintTranslations[key.type], {
    param1: key.params[0] ?? "",
    param2: key.params[1] ?? "",
  });
}

export { getChestHintTranslation };
export type { GetChestHintTranslationParams };
