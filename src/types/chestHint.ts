import { ChestColor } from './chestProperties';

type ChestHintParamDefinition<P1 = never, P2 = never> = [P1] extends [never]
  ? []
  : [P2] extends [never]
  ? [P1]
  : [P1, P2];

interface ChestHintBase<
  T extends ChestHintType,
  P1 extends HintParameterType & keyof HintParameters = never,
  P2 extends HintParameterType & keyof HintParameters = never
> {
  type: T;
  params: ChestHintParamDefinition<HintParameters[P1], HintParameters[P2]>;
}

const CHEST_HINT_TYPE = {
  asleep: 'ASLEEP',
  mimicNotSelf: 'MIMIC_NOT_SELF',
  mimicDirection: 'MIMIC_DIRECTION',
  colorMoreMimics: 'COLOR_MORE_MIMICS',
} as const;

type ChestHintType = (typeof CHEST_HINT_TYPE)[keyof typeof CHEST_HINT_TYPE];

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

const HINT_PARAMETER_TYPE = {
  color: 'COLOR',
  direction: 'DIRECTION',
} as const;

type HintParameterType =
  (typeof HINT_PARAMETER_TYPE)[keyof typeof HINT_PARAMETER_TYPE];

interface HintParameters {
  [HINT_PARAMETER_TYPE.color]: ChestColor;
  [HINT_PARAMETER_TYPE.direction]: ChestDirection;
}

interface ChestHints {
  MimicDirection: ChestHintBase<
    (typeof CHEST_HINT_TYPE)['mimicDirection'],
    typeof HINT_PARAMETER_TYPE.direction
  >;
  NotMimicSelf: ChestHintBase<(typeof CHEST_HINT_TYPE)['mimicNotSelf']>;
  Asleep: ChestHintBase<(typeof CHEST_HINT_TYPE)['asleep']>;
  ColorMoreMimics: ChestHintBase<
    (typeof CHEST_HINT_TYPE)['colorMoreMimics'],
    typeof HINT_PARAMETER_TYPE.color,
    typeof HINT_PARAMETER_TYPE.color
  >;
}

type ChestHint = ChestHints[keyof ChestHints];

type ChestHintOfType<T extends ChestHintType> = ChestHint & { type: T };

export { CHEST_HINT_TYPE, CHEST_DIRECTION };
export type {
  ChestHintType,
  ChestDirection,
  ChestHint,
  ChestHints,
  ChestHintOfType,
};
