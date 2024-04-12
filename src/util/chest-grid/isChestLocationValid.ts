import { ChestGrid } from '@/types/chestGrid';
import { ChestLocation } from '@/types/chestLocation';

interface IsChestLocationValidParams {
  numChests: ChestGrid['numChests'];
  location: ChestLocation;
}

function isChestLocationValid({
  numChests,
  location,
}: IsChestLocationValidParams): boolean {
  const [row, col] = location;
  if (row < 0 || col < 0) {
    return false;
  }
  switch (numChests) {
    case 4:
      if (row > 1 || col > 1) {
        return false;
      }
      break;
    case 6:
      if (row > 1 || col > 2) {
        return false;
      }
      break;
    case 7:
      if (row > 2 || col > 2) {
        return false;
      }
      if (row !== 1 && col > 1) {
        return false;
      }
      break;
    case 9:
      if (row > 2 || col > 2) {
        return false;
      }
      break;
    default:
      return false;
  }
  return true;
}

export { isChestLocationValid };
