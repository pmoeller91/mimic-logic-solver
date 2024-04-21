import { expect, it, describe } from 'vitest';
import { createChestGrid } from './createChestGrid';
import { getChestByLocation } from './getChestByLocation';
import { ChestLocation } from '@/types/chestLocation';
import { getRankChests } from './getRankChests';
import { CHEST_RANK } from '@/types/chestHint';

const getChestByLocationDefined = ({
  grid,
  location,
}: Parameters<typeof getChestByLocation>[0]) => {
  const chest = getChestByLocation({ grid, location });
  if (chest === null) {
    throw new Error('Error: tried to get an invalid chest');
  }
  return chest;
};

describe('getRankChests', () => {
  it('should work in a size-4 grid', () => {
    const grid = createChestGrid({ numChests: 4 });
    const targetRank = CHEST_RANK.topMost;
    const expectedLocations: ChestLocation[] = [
      [0, 0],
      [0, 1],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const rankChests = getRankChests({ grid, rank: targetRank });
    expect(rankChests).toEqual(expect.arrayContaining(expectedChests));
    expect(rankChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-6 grid', () => {
    const grid = createChestGrid({ numChests: 6 });
    const targetRank = CHEST_RANK.rightMost;
    const expectedLocations: ChestLocation[] = [
      [0, 2],
      [1, 2],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const rankChests = getRankChests({ grid, rank: targetRank });
    expect(rankChests).toEqual(expect.arrayContaining(expectedChests));
    expect(rankChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-7 grid with top or bottom', () => {
    const grid = createChestGrid({ numChests: 7 });
    const targetRank = CHEST_RANK.bottomMost;
    const expectedLocations: ChestLocation[] = [
      [2, 0],
      [2, 1],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const rankChests = getRankChests({ grid, rank: targetRank });
    expect(rankChests).toEqual(expect.arrayContaining(expectedChests));
    expect(rankChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-7 grid with left or right (returning none, as left/right are ill-defined in a size-7 grid)', () => {
    const grid = createChestGrid({ numChests: 7 });
    const targetRank = CHEST_RANK.leftMost;
    const expectedLocations: ChestLocation[] = [];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const rankChests = getRankChests({ grid, rank: targetRank });
    expect(rankChests).toEqual(expect.arrayContaining(expectedChests));
    expect(rankChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-9 grid', () => {
    const grid = createChestGrid({ numChests: 9 });
    const targetRank = CHEST_RANK.leftMost;
    const expectedLocations: ChestLocation[] = [
      [0, 0],
      [1, 0],
      [2, 0],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const rankChests = getRankChests({ grid, rank: targetRank });
    expect(rankChests).toEqual(expect.arrayContaining(expectedChests));
    expect(rankChests.length).toEqual(expectedChests.length);
  });
});
