import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { ChestHint, ChestHintOfType, ChestHintType } from "@/types/chestHint";
import { GameInfo } from "@/types/state/gameInfo";

interface ChestWithHintType<T extends ChestHintType> extends Chest {
  hint: ChestHintOfType<T>;
}

interface ChestWithHint<T extends ChestHint> extends Chest {
  hint: T;
}

interface HintResolverParams<T extends ChestHint> {
  chest: ChestWithHint<T>;
  grid: ChestGrid;
  gameInfo: GameInfo;
}

type HintResolver<T extends ChestHint> = ({
  chest,
  grid,
  gameInfo,
}: HintResolverParams<T>) => boolean;

export type { HintResolverParams, HintResolver, ChestWithHintType, ChestWithHint };
