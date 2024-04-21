import { ChestGrid, ValidGridSizes } from '@/types/chestGrid';
import { CHEST_RANK, ChestRank } from '@/types/chestHint';
import { ChestLocation } from '@/types/chestLocation';
import { getChestByLocation } from './getChestByLocation';
import { Chest } from '@/types/chest';

interface GetRankChestsParams {
  grid: ChestGrid;
  rank: ChestRank;
}

const rankChestLocations: Record<
  ValidGridSizes,
  Record<ChestRank, ChestLocation[]>
> = {
  4: {
    [CHEST_RANK.topMost]: [
      [0, 0],
      [0, 1],
    ],
    [CHEST_RANK.bottomMost]: [
      [1, 0],
      [1, 1],
    ],
    [CHEST_RANK.leftMost]: [
      [0, 0],
      [1, 0],
    ],
    [CHEST_RANK.rightMost]: [
      [0, 1],
      [1, 1],
    ],
  },
  6: {
    [CHEST_RANK.topMost]: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [CHEST_RANK.bottomMost]: [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [CHEST_RANK.leftMost]: [
      [0, 0],
      [1, 0],
    ],
    [CHEST_RANK.rightMost]: [
      [0, 2],
      [1, 2],
    ],
  },
  7: {
    [CHEST_RANK.topMost]: [
      [0, 0],
      [0, 1],
    ],
    [CHEST_RANK.bottomMost]: [
      [2, 0],
      [2, 1],
    ],
    [CHEST_RANK.leftMost]: [],
    [CHEST_RANK.rightMost]: [],
  },
  9: {
    [CHEST_RANK.topMost]: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [CHEST_RANK.bottomMost]: [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [CHEST_RANK.leftMost]: [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [CHEST_RANK.rightMost]: [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  },
};

const getRankChests = ({ grid, rank }: GetRankChestsParams) => {
  return rankChestLocations[grid.numChests][rank]
    .map((location) => getChestByLocation({ grid, location }))
    .filter((chest): chest is Chest => chest !== null);
};

export { getRankChests };
