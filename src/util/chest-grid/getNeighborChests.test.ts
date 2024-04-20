import { expect, it, describe } from 'vitest';
import { createChestGrid } from './createChestGrid';
import { getChestByLocation } from './getChestByLocation';
import { ChestLocation } from '@/types/chestLocation';
import { getNeighborChests } from './getNeighborChests';

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

describe('getNeighborChests', () => {
  it('should work in a size-4 grid', () => {
    const grid = createChestGrid({ numChests: 4 });
    const targetChest = getChestByLocationDefined({ grid, location: [0, 0] });
    const expectedLocations: ChestLocation[] = [
      [0, 1],
      [1, 0],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const neighborChests = getNeighborChests({ chest: targetChest, grid });
    expect(neighborChests).toEqual(expect.arrayContaining(neighborChests));
    expect(neighborChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-6 grid', () => {
    const grid = createChestGrid({ numChests: 6 });
    const targetChest = getChestByLocationDefined({ grid, location: [0, 1] });
    const expectedLocations: ChestLocation[] = [
      [0, 0],
      [0, 2],
      [1, 1],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const neighborChests = getNeighborChests({ chest: targetChest, grid });
    expect(neighborChests).toEqual(expect.arrayContaining(neighborChests));
    expect(neighborChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-7 grid', () => {
    const grid = createChestGrid({ numChests: 7 });
    const targetChest = getChestByLocationDefined({ grid, location: [1, 1] });
    const expectedLocations: ChestLocation[] = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const neighborChests = getNeighborChests({ chest: targetChest, grid });
    expect(neighborChests).toEqual(expect.arrayContaining(neighborChests));
    expect(neighborChests.length).toEqual(expectedChests.length);
  });
  it('should work in a size-9 grid', () => {
    const grid = createChestGrid({ numChests: 9 });
    const targetChest = getChestByLocationDefined({ grid, location: [2, 1] });
    const expectedLocations: ChestLocation[] = [
      [1, 1],
      [2, 0],
      [2, 2],
    ];
    const expectedChests = expectedLocations.map((location) =>
      getChestByLocationDefined({ grid, location })
    );
    const neighborChests = getNeighborChests({ chest: targetChest, grid });
    expect(neighborChests).toEqual(expect.arrayContaining(neighborChests));
    expect(neighborChests.length).toEqual(expectedChests.length);
  });
});
