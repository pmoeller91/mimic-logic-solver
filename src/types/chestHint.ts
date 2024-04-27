import { ChestColor } from "./chestColor";

type ChestHintParamDefinition<P1 = never, P2 = never> = [P1] extends [never]
  ? []
  : [P2] extends [never]
    ? [P1]
    : [P1, P2];

interface ChestHintBase<
  T extends ChestHintType,
  P1 extends HintParameterType & keyof HintParameters = never,
  P2 extends HintParameterType & keyof HintParameters = never,
> {
  params: ChestHintParamDefinition<HintParameters[P1], HintParameters[P2]>;
  type: T;
}

const CHEST_HINT_TYPE = {
  __error: "__ERROR",
  colorGold: "COLOR_GOLD",
  colorMimic: "COLOR_MIMIC",
  colorMoreMimics: "COLOR_MORE_MIMICS",
  colorNoGold: "COLOR_NO_GOLD",
  colorNoMimic: "COLOR_NO_MIMIC",
  colorNoRobber: "COLOR_NO_ROBBER",
  colorNumMimics: "COLOR_NUM_MIMICS",
  colorRobber: "COLOR_ROBBER",
  colorSameMimics: "COLOR_SAME_MIMICS",
  directionGold: "DIRECTION_GOLD",
  directionMimic: "DIRECTION_MIMIC",
  directionNoRobber: "DIRECTION_NO_ROBBER",
  directionNotGold: "DIRECTION_NOT_GOLD",
  directionNotMimic: "DIRECTION_NOT_MIMIC",
  directionRobber: "DIRECTION_ROBBER",
  mimicsNeighbors: "MIMICS_NEIGHBORS",
  mimicsNotNeighbors: "MIMICS_NOT_NEIGHBORS",
  mimicsNotSameColor: "MIMICS_NOT_ALL_SAME_COLOR",
  mimicsNumber: "MIMICS_NUMBER",
  mimicsSameColor: "MIMICS_ALL_SAME_COLOR",
  number: "NUMBER",
  rankGold: "RANK_GOLD",
  rankMimic: "RANK_MIMIC",
  rankMoreMimics: "RANK_MORE_MIMICS",
  rankNoGold: "RANK_NO_GOLD",
  rankNoMimic: "RANK_NO_MIMIC",
  rankNoRobber: "RANK_NO_ROBBER",
  rankRobber: "RANK_ROBBER",
  rankSameMimics: "RANK_SAME_MIMICS",
  selfAsleep: "SELF_ASLEEP",
  selfNotMimic: "SELF_NOT_MIMIC",
} as const;

type ChestHintType = (typeof CHEST_HINT_TYPE)[keyof typeof CHEST_HINT_TYPE];

type ChestHintTypes = {
  [key in keyof typeof CHEST_HINT_TYPE]: (typeof CHEST_HINT_TYPE)[key];
};

const CHEST_DIRECTION = {
  up: "UP",
  down: "DOWN",
  left: "LEFT",
  right: "RIGHT",
  upLeft: "UP_LEFT",
  upRight: "UP_RIGHT",
  downLeft: "DOWN_LEFT",
  downRight: "DOWN_RIGHT",
} as const;

type ChestDirection = (typeof CHEST_DIRECTION)[keyof typeof CHEST_DIRECTION];

const CHEST_RANK = {
  topMost: "TOP_MOST",
  bottomMost: "BOTTOM_MOST",
  leftMost: "LEFT_MOST",
  rightMost: "RIGHT_MOST",
} as const;

type ChestRank = (typeof CHEST_RANK)[keyof typeof CHEST_RANK];

const HINT_PARAMETER_TYPE = {
  color: "COLOR",
  direction: "DIRECTION",
  rank: "RANK",
  number: "NUMBER",
} as const;

type HintParameterType = (typeof HINT_PARAMETER_TYPE)[keyof typeof HINT_PARAMETER_TYPE];

type HintParameterTypes = {
  [key in keyof typeof HINT_PARAMETER_TYPE]: (typeof HINT_PARAMETER_TYPE)[key];
};

interface HintParameters {
  [HINT_PARAMETER_TYPE.color]: ChestColor;
  [HINT_PARAMETER_TYPE.direction]: ChestDirection;
  [HINT_PARAMETER_TYPE.rank]: ChestRank;
  [HINT_PARAMETER_TYPE.number]: number;
}

interface ChestHints {
  ColorGold: ChestHintBase<ChestHintTypes["colorGold"], HintParameterTypes["color"]>;
  ColorMimic: ChestHintBase<ChestHintTypes["colorMimic"], HintParameterTypes["color"]>;
  ColorMoreMimics: ChestHintBase<
    ChestHintTypes["colorMoreMimics"],
    HintParameterTypes["color"],
    HintParameterTypes["color"]
  >;
  ColorNoGold: ChestHintBase<ChestHintTypes["colorNoGold"], HintParameterTypes["color"]>;
  ColorNoMimic: ChestHintBase<ChestHintTypes["colorNoMimic"], HintParameterTypes["color"]>;
  ColorNoRobber: ChestHintBase<ChestHintTypes["colorNoRobber"], HintParameterTypes["color"]>;
  ColorNumMimics: ChestHintBase<
    ChestHintTypes["colorNumMimics"],
    HintParameterTypes["number"],
    HintParameterTypes["color"]
  >;
  ColorRobber: ChestHintBase<ChestHintTypes["colorRobber"], HintParameterTypes["color"]>;
  ColorSameMimics: ChestHintBase<
    ChestHintTypes["colorSameMimics"],
    HintParameterTypes["color"],
    HintParameterTypes["color"]
  >;
  DirectionGold: ChestHintBase<ChestHintTypes["directionGold"], HintParameterTypes["direction"]>;
  DirectionMimic: ChestHintBase<ChestHintTypes["directionMimic"], HintParameterTypes["direction"]>;
  DirectionNoRobber: ChestHintBase<
    ChestHintTypes["directionNoRobber"],
    HintParameterTypes["direction"]
  >;
  DirectionNotGold: ChestHintBase<
    ChestHintTypes["directionNotGold"],
    HintParameterTypes["direction"]
  >;
  DirectionNotMimic: ChestHintBase<
    ChestHintTypes["directionNotMimic"],
    HintParameterTypes["direction"]
  >;
  DirectionRobber: ChestHintBase<
    ChestHintTypes["directionRobber"],
    HintParameterTypes["direction"]
  >;
  Error: ChestHintBase<ChestHintTypes["__error"]>;
  MimicsNeighbors: ChestHintBase<ChestHintTypes["mimicsNeighbors"]>;
  MimicsNotNeighbors: ChestHintBase<ChestHintTypes["mimicsNotNeighbors"]>;
  MimicsNotSameColor: ChestHintBase<ChestHintTypes["mimicsNotSameColor"]>;
  MimicsNumber: ChestHintBase<ChestHintTypes["mimicsNumber"], HintParameterTypes["number"]>;
  MimicsSameColor: ChestHintBase<ChestHintTypes["mimicsSameColor"]>;
  Number: ChestHintBase<ChestHintTypes["number"], HintParameterTypes["number"]>;
  RankGold: ChestHintBase<ChestHintTypes["rankGold"], HintParameterTypes["rank"]>;
  RankMimic: ChestHintBase<ChestHintTypes["rankMimic"], HintParameterTypes["rank"]>;
  RankMoreMimics: ChestHintBase<
    ChestHintTypes["rankMoreMimics"],
    HintParameterTypes["rank"],
    HintParameterTypes["rank"]
  >;
  RankNoGold: ChestHintBase<ChestHintTypes["rankNoGold"], HintParameterTypes["rank"]>;
  RankNoMimic: ChestHintBase<ChestHintTypes["rankNoMimic"], HintParameterTypes["rank"]>;
  RankNoRobber: ChestHintBase<ChestHintTypes["rankNoRobber"], HintParameterTypes["rank"]>;
  RankRobber: ChestHintBase<ChestHintTypes["rankRobber"], HintParameterTypes["rank"]>;
  RankSameMimics: ChestHintBase<
    ChestHintTypes["rankSameMimics"],
    HintParameterTypes["rank"],
    HintParameterTypes["rank"]
  >;
  SelfAsleep: ChestHintBase<ChestHintTypes["selfAsleep"]>;
  SelfNotMimic: ChestHintBase<ChestHintTypes["selfNotMimic"]>;
}

type ChestHint = ChestHints[keyof ChestHints];

type ChestHintOfType<T extends ChestHintType> = ChestHint & { type: T };

export { CHEST_HINT_TYPE, CHEST_DIRECTION, CHEST_RANK };
export type {
  ChestHintType,
  ChestHintTypes,
  ChestDirection,
  ChestRank,
  ChestHint,
  ChestHints,
  ChestHintOfType,
  ChestHintBase,
  HintParameterTypes,
  HintParameterType,
};
