import { CHEST_HINT_TYPE, ChestHint } from '@/types/chestHint';

const chestHintTranslations: Record<ChestHint['type'], string> = {
  [CHEST_HINT_TYPE.colorGold]: 'chestHint.colorGold',
  [CHEST_HINT_TYPE.colorMimic]: 'chestHint.colorMimic',
  [CHEST_HINT_TYPE.colorMoreMimics]: 'chestHint.colorMoreMimics',
  [CHEST_HINT_TYPE.colorNoGold]: 'chestHint.colorNoGold',
  [CHEST_HINT_TYPE.colorNoMimic]: 'chestHint.colorNoMimic',
  [CHEST_HINT_TYPE.colorNumMimics]: 'chestHint.colorNumMimics',
  [CHEST_HINT_TYPE.colorSameMimics]: 'chestHint.colorSameMimics',
  [CHEST_HINT_TYPE.directionGold]: 'chestHint.directionGold',
  [CHEST_HINT_TYPE.directionMimic]: 'chestHint.directionMimic',
  [CHEST_HINT_TYPE.directionNotGold]: 'chestHint.directionNotGold',
  [CHEST_HINT_TYPE.directionNotMimic]: 'chestHint.directionNotMimic',
  [CHEST_HINT_TYPE.mimicsNotSameColor]: 'chestHint.mimicsNotSameColor',
  [CHEST_HINT_TYPE.mimicsSameColor]: 'chestHint.mimicsSameColor',
  [CHEST_HINT_TYPE.rankGold]: 'chestHint.rankGold',
  [CHEST_HINT_TYPE.rankMimic]: 'chestHint.rankMimic',
  [CHEST_HINT_TYPE.rankMinimumMimics]: 'chestHint.rankMinimumMimics',
  [CHEST_HINT_TYPE.rankMoreMimics]: 'chestHint.rankMoreMimics',
  [CHEST_HINT_TYPE.rankNoGold]: 'chestHint.rankNoGold',
  [CHEST_HINT_TYPE.rankNoMimic]: 'chestHint.rankNoMimic',
  [CHEST_HINT_TYPE.rankSameMimics]: 'chestHint.rankSameMimics',
  [CHEST_HINT_TYPE.selfAsleep]: 'chestHint.selfAsleep',
  [CHEST_HINT_TYPE.selfNotMimic]: 'chestHint.selfNotMimic',
};

export { chestHintTranslations };
