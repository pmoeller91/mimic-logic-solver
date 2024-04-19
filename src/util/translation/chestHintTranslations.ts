import { CHEST_HINT_TYPE, ChestHint } from '@/types/chestHint';

const chestHintTranslations: Record<ChestHint['type'], string> = {
  [CHEST_HINT_TYPE.asleep]: 'chestHint.asleep',
  [CHEST_HINT_TYPE.mimicNotSelf]: 'chestHint.mimicNotSelf',
  [CHEST_HINT_TYPE.mimicDirection]: 'chestHint.mimicDirection',
  [CHEST_HINT_TYPE.colorMoreMimics]: 'chestHint.colorMoreMimics',
};

export { chestHintTranslations };
