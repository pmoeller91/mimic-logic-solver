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
  const [x, y] = location;
  if (x < 0 || y < 0) {
    return false;
  }
  switch (numChests) {
    case 4:
      if (x > 1 || y > 1) {
        return false;
      }
      break;
    case 6:
      if (x > 2 || y > 1) {
        return false;
      }
      break;
    case 7:
      if (x > 2 || y > 2) {
        return false;
      }
      if (x > 1 && y !== 1) {
        return false;
      }
      break;
    case 9:
      if (x > 2 || y > 2) {
        return false;
      }
      break;
    default:
      return false;
  }
  return true;
}

export { isChestLocationValid };
