import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { ChestLocation } from '@/types/chestLocation';
import { getChestLocation } from './getChestLocation';

interface GetSurroundingChestsParams {
  chest: Chest;
  grid: ChestGrid;
}

const notSameLocation = (
  locationOne: ChestLocation,
  locationTwo: ChestLocation
): boolean =>
  locationOne[0] !== locationTwo[0] || locationOne[1] !== locationTwo[1];

const distance = (numOne: number, numTwo: number) => Math.abs(numOne - numTwo);
const rowDistance = (
  locationOne: ChestLocation,
  locationTwo: ChestLocation
): number => distance(locationOne[0], locationTwo[0]);
const colDistance = (
  locationOne: ChestLocation,
  locationTwo: ChestLocation
): number => distance(locationOne[1], locationTwo[1]);

/**
 * Returns the chests around a chest on the grid. Unlike "neighbor" chests, this
 * includes diagonally adjacent chests, more like Minesweeper. This is designed
 * to be used only for orthogonal grid puzzles, specifically 3x3 puzzles that
 * are generated in the "Number" game mode in-game. Order will be consistent,
 * but is not guaranteed to follow any pattern.
 */
const getSurroundingChests = ({
  chest,
  grid,
}: GetSurroundingChestsParams): Chest[] => {
  if (grid.numChests === 7) {
    return [];
  }
  const targetChestLocation = getChestLocation({ grid, chest });
  if (targetChestLocation === null) {
    return [];
  }
  const surroundingChests = grid.rows
    .map((row, rowIndex) =>
      row.filter((_chest, colIndex) => {
        const chestLocation: ChestLocation = [rowIndex, colIndex];
        return (
          notSameLocation(targetChestLocation, chestLocation) &&
          rowDistance(targetChestLocation, chestLocation) <= 1 &&
          colDistance(targetChestLocation, chestLocation) <= 1
        );
      })
    )
    .flat();
  return surroundingChests;
};

export { getSurroundingChests };
