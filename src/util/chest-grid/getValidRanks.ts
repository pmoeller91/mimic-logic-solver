import { ValidGridSizes } from "@/types/chestGrid";
import { CHEST_RANK } from "@/types/chestHint";

interface GetValidRanksParams {
  numChests: ValidGridSizes;
}

const orthoRanks = [
  CHEST_RANK.topMost,
  CHEST_RANK.rightMost,
  CHEST_RANK.bottomMost,
  CHEST_RANK.leftMost,
];
const hexRanks = [CHEST_RANK.topMost, CHEST_RANK.bottomMost];

const getValidRanks = ({ numChests }: GetValidRanksParams) => {
  if (numChests === 7) {
    return hexRanks;
  }
  return orthoRanks;
};

export { getValidRanks };
