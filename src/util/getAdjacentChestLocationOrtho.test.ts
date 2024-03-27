import { CHEST_DIRECTION } from '@/types/chestHint';
import { describe, it, expect } from 'vitest';
import { getAdjacentChestLocationOrtho } from './getAdjacentChestLocationOrtho';
import { ChestLocation } from '@/types/chestLocation';

describe('getAdjacentChestLocationOrtho', () => {
  describe('for invalid directions', () => {
    it.each([
      {
        direction: CHEST_DIRECTION.downLeft,
        directionName: 'diagonally down-left',
      },
      {
        direction: CHEST_DIRECTION.downRight,
        directionName: 'diagonally down-right',
      },
      {
        direction: CHEST_DIRECTION.upLeft,
        directionName: 'diagonally up-left',
      },
      {
        direction: CHEST_DIRECTION.upRight,
        directionName: 'diagonally up-right',
      },
    ] as const)(
      'should return null when the direction is $directionName',
      ({ direction }) => {
        const center: ChestLocation = [1, 1];
        expect(
          getAdjacentChestLocationOrtho({
            direction,
            location: center,
            numChests: 9,
          })
        ).toEqual(null);
      }
    );
  });
  describe('if the initial location is invalid', () => {
    it('should return null even if there is a valid location in that direction', () => {
      const initialPosition: ChestLocation = [-1, 0];
      expect(
        getAdjacentChestLocationOrtho({
          location: initialPosition,
          direction: CHEST_DIRECTION.right,
          numChests: 9,
        })
      ).toEqual(null);
    });
  });
  describe('if the projected position is out of bounds', () => {
    it('should return null', () => {
      const initialPosition: ChestLocation = [0, 2];
      expect(
        getAdjacentChestLocationOrtho({
          location: initialPosition,
          direction: CHEST_DIRECTION.right,
          numChests: 6,
        })
      ).toEqual(null);
    });
  });
  describe('if the projected position is valid', () => {
    it('should return the position', () => {
      const initialPosition: ChestLocation = [0, 0];
      const expectedPosition: ChestLocation = [0, 1];
      expect(
        getAdjacentChestLocationOrtho({
          location: initialPosition,
          direction: CHEST_DIRECTION.down,
          numChests: 9,
        })
      ).toEqual(expectedPosition);
    });
  });
});
