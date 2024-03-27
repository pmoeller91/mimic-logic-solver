import { ChestGrid } from '@/types/chestGrid';
import { CHEST_COLOR } from '@/types/chestProperties';
import { expect, it, describe } from 'vitest';
import { getChestLocation } from './getChestLocation';
import { Chest } from '@/types/chest';
import { ChestLocation } from '@/types/chestLocation';

describe('getChestLocation', () => {
  it('should be able to locate a specific chest in a grid', () => {
    const needle: Chest = { color: CHEST_COLOR.black };
    const expectedLocation: ChestLocation = [1, 0];
    const haystack: ChestGrid = {
      numChests: 4,
      rows: [
        [{ color: CHEST_COLOR.blue }, needle],
        [{ color: CHEST_COLOR.blue }, { color: CHEST_COLOR.blue }],
      ],
    };
    expect(getChestLocation({ grid: haystack, chest: needle })).toEqual(
      expectedLocation
    );
  });
  it('should be able to locate a specific chest in a grid even if all chests have identical properties', () => {
    const needle: Chest = { color: CHEST_COLOR.black };
    const expectedLocation: ChestLocation = [0, 1];
    const haystack: ChestGrid = {
      numChests: 4,
      rows: [
        [{ color: CHEST_COLOR.black }, { color: CHEST_COLOR.black }],
        [needle, { color: CHEST_COLOR.black }],
      ],
    };
    expect(getChestLocation({ grid: haystack, chest: needle })).toEqual(
      expectedLocation
    );
  });
  it('should return null if the chest is not in the provided grid', () => {
    const needle: Chest = { color: CHEST_COLOR.black };
    const expectedLocation = null;
    const haystack: ChestGrid = {
      numChests: 4,
      rows: [
        [{ color: CHEST_COLOR.black }, { color: CHEST_COLOR.black }],
        [{ color: CHEST_COLOR.black }, { color: CHEST_COLOR.black }],
      ],
    };
    expect(getChestLocation({ grid: haystack, chest: needle })).toEqual(
      expectedLocation
    );
  });
});
