import { CHEST_DIRECTION, ChestDirection } from '@/types/chestHint';
import { ChestLocation } from '@/types/chestLocation';
import { describe, expect, it } from 'vitest';
import { getAdjacentChestLocationHex } from './getAdjacentChestLocationHex';

describe('getAdjacentChestLocationHex', () => {
  describe('for invalid directions', () => {
    it.each([
      {
        direction: CHEST_DIRECTION.up,
        directionName: 'up',
      },
      {
        direction: CHEST_DIRECTION.down,
        directionName: 'down',
      },
    ] as const)(
      'should return null when the direction is $directionName',
      ({ direction }) => {
        const center: ChestLocation = [1, 1];
        expect(
          getAdjacentChestLocationHex({
            direction,
            location: center,
          })
        ).toEqual(null);
      }
    );
  });
  describe('if the initial location is invalid', () => {
    it('should return null even if there is a valid location in that direction', () => {
      const initialPosition: ChestLocation = [-1, 0];
      expect(
        getAdjacentChestLocationHex({
          location: initialPosition,
          direction: CHEST_DIRECTION.right,
        })
      ).toEqual(null);
    });
  });
  describe('for valid movements', () => {
    it.each<{
      direction: ChestDirection;
      directionName: string;
      startLocation: ChestLocation;
      expectedLocation: ChestLocation;
    }>([
      {
        direction: CHEST_DIRECTION.upLeft,
        directionName: 'diagonally up-left',
        startLocation: [1, 1],
        expectedLocation: [0, 0],
      },
      {
        direction: CHEST_DIRECTION.upRight,
        directionName: 'diagonally up-right',
        startLocation: [1, 1],
        expectedLocation: [1, 0],
      },
      {
        direction: CHEST_DIRECTION.downLeft,
        directionName: 'diagonally down-left',
        startLocation: [1, 1],
        expectedLocation: [0, 2],
      },
      {
        direction: CHEST_DIRECTION.downRight,
        directionName: 'diagonally down-right',
        startLocation: [1, 1],
        expectedLocation: [1, 2],
      },
      {
        direction: CHEST_DIRECTION.downRight,
        directionName: 'diagonally down-right',
        startLocation: [0, 0],
        expectedLocation: [1, 1],
      },
      {
        direction: CHEST_DIRECTION.upLeft,
        directionName: 'diagonally up-left',
        startLocation: [1, 2],
        expectedLocation: [1, 1],
      },
      {
        direction: CHEST_DIRECTION.upRight,
        directionName: 'diagonally up-right',
        startLocation: [0, 2],
        expectedLocation: [1, 1],
      },
      {
        direction: CHEST_DIRECTION.downLeft,
        directionName: 'diagonally down-left',
        startLocation: [1, 0],
        expectedLocation: [1, 1],
      },
      {
        direction: CHEST_DIRECTION.left,
        directionName: 'left',
        startLocation: [1, 0],
        expectedLocation: [0, 0],
      },
      {
        direction: CHEST_DIRECTION.right,
        directionName: 'right',
        startLocation: [0, 2],
        expectedLocation: [1, 2],
      },
    ])(
      'when going $directionName from $startLocation you should end up at $expectedLocation',
      ({ direction, startLocation, expectedLocation }) => {
        expect(
          getAdjacentChestLocationHex({ location: startLocation, direction })
        ).toEqual(expectedLocation);
      }
    );
  });
  describe('for invalid movements', () => {
    it.each<{
      direction: ChestDirection;
      directionName: string;
      startLocation: ChestLocation;
    }>([
      {
        direction: CHEST_DIRECTION.upLeft,
        directionName: 'diagonally up-left',
        startLocation: [0, 1],
      },
      {
        direction: CHEST_DIRECTION.downLeft,
        directionName: 'diagonally down-left',
        startLocation: [0, 1],
      },
      {
        direction: CHEST_DIRECTION.upRight,
        directionName: 'diagonally up-right',
        startLocation: [2, 1],
      },
      {
        direction: CHEST_DIRECTION.downRight,
        directionName: 'diagonally down-right',
        startLocation: [2, 1],
      },
      {
        direction: CHEST_DIRECTION.left,
        directionName: 'left',
        startLocation: [0, 1],
      },
      {
        direction: CHEST_DIRECTION.right,
        directionName: 'right',
        startLocation: [1, 0],
      },
    ])(
      'when going $directionName from $startLocation you should receive null as the destination is invalid',
      ({ direction, startLocation }) => {
        expect(
          getAdjacentChestLocationHex({ location: startLocation, direction })
        ).toEqual(null);
      }
    );
  });
});
