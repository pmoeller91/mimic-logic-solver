import { ChestGrid } from '@/types/chestGrid';
import { CHEST_DIRECTION, ChestDirection } from '@/types/chestHint';
import { ChestLocation } from '@/types/chestLocation';
import { isChestLocationValid } from './isChestLocationValid';

const orthogonalDirections: ChestDirection[] = [
  CHEST_DIRECTION.up,
  CHEST_DIRECTION.down,
  CHEST_DIRECTION.left,
  CHEST_DIRECTION.right,
];

interface GridOrthoGetAdjacentChestLocationParams {
  location: ChestLocation;
  numChests: ChestGrid['numChests'] & (4 | 6 | 9);
  direction: ChestDirection;
}

function getAdjacentChestLocationOrtho({
  location,
  direction,
  numChests,
}: GridOrthoGetAdjacentChestLocationParams): ChestLocation | null {
  const validDirections = orthogonalDirections;
  const [x, y] = location;
  let prospectiveLocation: ChestLocation = [-1, -1];
  if (!validDirections.includes(direction)) {
    return null;
  }
  if (!isChestLocationValid({ numChests, location })) {
    return null;
  }
  switch (direction) {
    case CHEST_DIRECTION.up:
      prospectiveLocation = [x, y - 1];
      break;
    case CHEST_DIRECTION.down:
      prospectiveLocation = [x, y + 1];
      break;
    case CHEST_DIRECTION.left:
      prospectiveLocation = [x - 1, y];
      break;
    case CHEST_DIRECTION.right:
      prospectiveLocation = [x + 1, y];
      break;
  }
  return isChestLocationValid({ numChests, location: prospectiveLocation })
    ? prospectiveLocation
    : null;
}

export { getAdjacentChestLocationOrtho };
