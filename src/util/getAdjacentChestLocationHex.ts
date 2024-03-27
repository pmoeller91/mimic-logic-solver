import { CHEST_DIRECTION, ChestDirection } from '@/types/chestHint';
import { ChestLocation } from '@/types/chestLocation';
import { isChestLocationValid } from './isChestLocationValid';

interface GetAdjacentChestLocationHexParams {
  location: ChestLocation;
  direction: ChestDirection;
}

function getAdjacentChestLocationHex({
  location,
  direction,
}: GetAdjacentChestLocationHexParams): ChestLocation | null {
  const [x, y] = location;
  const validDirections: ChestDirection[] = [
    CHEST_DIRECTION.left,
    CHEST_DIRECTION.right,
    CHEST_DIRECTION.upLeft,
    CHEST_DIRECTION.upRight,
    CHEST_DIRECTION.downLeft,
    CHEST_DIRECTION.downRight,
  ];
  if (!validDirections.includes(direction)) {
    return null;
  }
  if (!isChestLocationValid({ location, numChests: 7 })) {
    return null;
  }
  let prospectiveLocation: ChestLocation = [-1, -1];
  switch (direction) {
    case CHEST_DIRECTION.left:
      prospectiveLocation = [x - 1, y];
      break;
    case CHEST_DIRECTION.right:
      prospectiveLocation = [x + 1, y];
      break;
    case CHEST_DIRECTION.upLeft:
      if (y === 1) {
        prospectiveLocation = [x - 1, y - 1];
      } else {
        prospectiveLocation = [x, y - 1];
      }
      break;
    case CHEST_DIRECTION.upRight:
      if (y === 1) {
        prospectiveLocation = [x, y - 1];
      } else {
        prospectiveLocation = [x + 1, y - 1];
      }
      break;
    case CHEST_DIRECTION.downLeft:
      if (y === 1) {
        prospectiveLocation = [x - 1, y + 1];
      } else {
        prospectiveLocation = [x, y + 1];
      }
      break;
    case CHEST_DIRECTION.downRight:
      if (y === 1) {
        prospectiveLocation = [x, y + 1];
      } else {
        prospectiveLocation = [x + 1, y + 1];
      }
      break;
  }
  return isChestLocationValid({ numChests: 7, location: prospectiveLocation })
    ? prospectiveLocation
    : null;
}

export { getAdjacentChestLocationHex };
