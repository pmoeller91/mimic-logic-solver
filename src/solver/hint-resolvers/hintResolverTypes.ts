import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { ChestHintOfType, ChestHintType } from '@/types/chestHint';
import { GameInfo } from '@/types/state/gameInfo';

interface ChestWithHint<T extends ChestHintType> extends Chest {
  hint: ChestHintOfType<T>;
}

interface HintResolverParams<T extends ChestHintType> {
  chest: ChestWithHint<T>;
  grid: ChestGrid;
  gameInfo: GameInfo;
}

type HintResolver<T extends ChestHintType> = ({ chest, grid, gameInfo }: HintResolverParams<T>) => boolean;

export type { HintResolverParams, HintResolver, ChestWithHint };
