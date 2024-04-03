import { CHEST_CONTENTS, ChestContents } from '@/types/chestProperties';
import { GetTranslationParams, TRANSLATION_TYPE } from '@/types/translation';

type GetChestContentsTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestContents,
  ChestContents
>;

const chestContentsTranslations: Record<ChestContents, string> = {
  [CHEST_CONTENTS.gear]: 'chestContents.gear',
  [CHEST_CONTENTS.gold]: 'chestContents.gold',
  [CHEST_CONTENTS.item]: 'chestContents.item',
  [CHEST_CONTENTS.mimic]: 'chestContents.mimic',
};

function getChestContentsTranslation({
  key,
  t,
}: GetChestContentsTranslationParams) {
  return t(chestContentsTranslations[key]);
}

export { getChestContentsTranslation };
export type { GetChestContentsTranslationParams };