import { ChestLocation } from '@/types/chestLocation';
import { describe, it, expect } from 'vitest';
import { isChestLocationValid } from './isChestLocationValid';

describe('isChestLocationValid', () => {
  describe('with an invalid number of chests', () => {
    it('should always return false', () => {
      const location: ChestLocation = [0, 0];
      expect(isChestLocationValid({ numChests: 0 as 4, location })).toEqual(
        false
      );
    });
  });
  describe('General cases', () => {
    describe.each([
      { numChests: 4 },
      { numChests: 6 },
      { numChests: 7 },
      { numChests: 9 },
    ] as const)('with $numChests chests', ({ numChests }) => {
      it('should return true if row === 0, col === 0', () => {
        const location: ChestLocation = [0, 0];
        expect(isChestLocationValid({ numChests, location })).toEqual(true);
      });
      it('should return false if col < 0', () => {
        const location: ChestLocation = [0, -1];
        expect(isChestLocationValid({ numChests, location })).toEqual(false);
      });
      it('should return false if col > 2', () => {
        const location: ChestLocation = [0, 3];
        expect(isChestLocationValid({ numChests, location })).toEqual(false);
      });
      it('should return false if row < 0', () => {
        const location: ChestLocation = [-1, 0];
        expect(isChestLocationValid({ numChests, location })).toEqual(false);
      });
      it('should return false if row > 2', () => {
        const location: ChestLocation = [3, 0];
        expect(isChestLocationValid({ numChests, location })).toEqual(false);
      });
    });
  });
  describe('Grid specific cases', () => {
    describe('with 4 chests', () => {
      it('should return true if 0 <= row <= 1, 0 <= col <= 1', () => {
        const location: ChestLocation = [0, 1];
        expect(isChestLocationValid({ numChests: 4, location })).toEqual(true);
      });
    });
    describe('with 6 chests', () => {
      it('should return true if 0 <= row <= 1, 0 <= col <= 2', () => {
        const location: ChestLocation = [1, 2];
        expect(isChestLocationValid({ numChests: 6, location })).toEqual(true);
      });
    });
    describe('with 7 chests', () => {
      it('should return true if row === 1, 0 <= col <= 2', () => {
        const location: ChestLocation = [1, 2];
        expect(isChestLocationValid({ numChests: 7, location })).toEqual(true);
      });
      it('should return true if 0 <= row <= 2, 0 <= col <= 1', () => {
        const location: ChestLocation = [0, 1];
        expect(isChestLocationValid({ numChests: 7, location })).toEqual(true);
      });
      it('should return false if row === 0, col === 2', () => {
        const location: ChestLocation = [0, 2];
        expect(isChestLocationValid({ numChests: 7, location })).toEqual(false);
      });
      it('should return false if row === 2, col === 2', () => {
        const location: ChestLocation = [2, 2];
        expect(isChestLocationValid({ numChests: 7, location })).toEqual(false);
      });
    });
    describe('with 9 chests', () => {
      it('should return true if 0 <= row <= 2, 0 <= col <= 2', () => {
        const location: ChestLocation = [2, 2];
        expect(isChestLocationValid({ numChests: 9, location })).toEqual(true);
      });
    });
  });
});
