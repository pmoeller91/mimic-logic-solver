import { CHEST_DIRECTION, ChestDirection } from "@/types/chestHint";
import { ChestLocation } from "@/types/chestLocation";
import { isChestLocationValid } from "./isChestLocationValid";

interface GetAdjacentChestLocationHexParams {
  location: ChestLocation;
  direction: ChestDirection;
}

function getAdjacentChestLocationHex({
  location,
  direction,
}: GetAdjacentChestLocationHexParams): ChestLocation | null {
  const [row, col] = location;
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
      prospectiveLocation = [row, col - 1];
      break;
    case CHEST_DIRECTION.right:
      prospectiveLocation = [row, col + 1];
      break;
    case CHEST_DIRECTION.upLeft:
      if (row === 1) {
        prospectiveLocation = [row - 1, col - 1];
      } else {
        prospectiveLocation = [row - 1, col];
      }
      break;
    case CHEST_DIRECTION.upRight:
      if (row === 1) {
        prospectiveLocation = [row - 1, col];
      } else {
        prospectiveLocation = [row - 1, col + 1];
      }
      break;
    case CHEST_DIRECTION.downLeft:
      if (row === 1) {
        prospectiveLocation = [row + 1, col - 1];
      } else {
        prospectiveLocation = [row + 1, col];
      }
      break;
    case CHEST_DIRECTION.downRight:
      if (row === 1) {
        prospectiveLocation = [row + 1, col];
      } else {
        prospectiveLocation = [row + 1, col + 1];
      }
      break;
  }
  return isChestLocationValid({ numChests: 7, location: prospectiveLocation })
    ? prospectiveLocation
    : null;
}

export { getAdjacentChestLocationHex };
