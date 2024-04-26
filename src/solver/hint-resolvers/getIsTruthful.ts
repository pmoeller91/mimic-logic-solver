import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { CHEST_CONTENTS } from '@/types/chestContents';
import { GameInfo } from '@/types/state/gameInfo';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';

interface IsTruthfulParams {
  chest: Chest;
  grid: ChestGrid;
  gameInfo: GameInfo;
}

const getIsTruthful = ({ chest }: IsTruthfulParams) => {
  return !chestContentIncludes({
    chest,
    contents: CHEST_CONTENTS.mimic,
  });
};

export { getIsTruthful };
