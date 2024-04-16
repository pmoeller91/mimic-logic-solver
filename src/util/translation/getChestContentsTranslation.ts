import { CHEST_CONTENTS, ChestContents } from '@/types/chestProperties';
import { GetTranslationParams, TRANSLATION_TYPE } from '@/types/translation';

type GetChestContentsTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestContents,
  ChestContents | ChestContents[]
>;

const chestContentsTranslations: Record<ChestContents, string> = {
  [CHEST_CONTENTS.gear]: 'chestContents.gear',
  [CHEST_CONTENTS.gold]: 'chestContents.gold',
  [CHEST_CONTENTS.item]: 'chestContents.item',
  [CHEST_CONTENTS.mimic]: 'chestContents.mimic',
  [CHEST_CONTENTS.not_mimic]: 'chestContents.notMimic',
  [CHEST_CONTENTS.unknown]: 'chestContents.unknown',
};

function getChestContentsTranslation({
  key,
  t,
}: GetChestContentsTranslationParams) {
  if (typeof key === 'string') {
    return t(chestContentsTranslations[key]);
  }
  if (key.length === 0) {
    return '';
  }
  if (key.length === 1) {
    return t(chestContentsTranslations[key[0]]);
  }
  if (
    key.includes(CHEST_CONTENTS.gear) &&
    key.includes(CHEST_CONTENTS.gold) &&
    key.includes(CHEST_CONTENTS.item) &&
    !key.includes(CHEST_CONTENTS.mimic)
  ) {
    return t('chestContents.notMimic');
  }
  const contentsTranslations = key.map((singleKey) =>
    t(chestContentsTranslations[singleKey])
  );
  return t('chestContents.multiple', { contents: contentsTranslations });
}

export { getChestContentsTranslation };
export type { GetChestContentsTranslationParams };
