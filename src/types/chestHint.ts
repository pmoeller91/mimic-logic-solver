import { ChestColor } from './chestProperties';

const CHEST_HINT_TYPE = {
  asleep: 'ASLEEP',
  mimicNotSelf: 'MIMIC_NOT_SELF',
  mimicDirection: 'MIMIC_DIRECTION',
  colorMoreMimics: 'COLOR_MORE_MIMICS',
} as const;

type ChestHintType = (typeof CHEST_HINT_TYPE)[keyof typeof CHEST_HINT_TYPE];

const CHEST_HINT_PARAM_TYPE = {
  direction: 'DIRECTION',
  color: 'COLOR',
} as const;

type ChestHintParamType =
  (typeof CHEST_HINT_PARAM_TYPE)[keyof typeof CHEST_HINT_PARAM_TYPE];

const CHEST_DIRECTION = {
  up: 'UP',
  left: 'LEFT',
  right: 'RIGHT',
  down: 'DOWN',
  upLeft: 'UP_LEFT',
  upRight: 'UP_RIGHT',
  downLeft: 'DOWN_LEFT',
  downRight: 'DOWN_RIGHT',
} as const;

type ChestDirection = (typeof CHEST_DIRECTION)[keyof typeof CHEST_DIRECTION];

interface ChestHintParamDirection {
  type: (typeof CHEST_HINT_PARAM_TYPE)['direction'];
  value: ChestDirection;
}

interface ChestHintParamColor {
  type: (typeof CHEST_HINT_PARAM_TYPE)['color'];
  value: ChestColor;
}

type ChestHintParam = ChestDirection;

interface ChestHintMimicDirection {
  type: (typeof CHEST_HINT_TYPE)['mimicDirection'];
  params: [ChestHintParamDirection];
}

interface ChestHintNotMimicSelf {
  type: (typeof CHEST_HINT_TYPE)['mimicNotSelf'];
  params: [];
}

interface ChestHintAsleep {
  type: (typeof CHEST_HINT_TYPE)['asleep'];
  params: [];
}

interface ChestHintColorMoreMimics {
  type: (typeof CHEST_HINT_TYPE)['colorMoreMimics'];
  params: [ChestHintParamColor, ChestHintParamColor];
}

type ChestHint =
  | ChestHintMimicDirection
  | ChestHintNotMimicSelf
  | ChestHintAsleep
  | ChestHintColorMoreMimics;

export { CHEST_HINT_TYPE, CHEST_HINT_PARAM_TYPE, CHEST_DIRECTION };
export type {
  ChestHintType,
  ChestHintParamType,
  ChestDirection,
  ChestHintParamDirection,
  ChestHintParam,
  ChestHintMimicDirection,
  ChestHintNotMimicSelf,
  ChestHint,
};
