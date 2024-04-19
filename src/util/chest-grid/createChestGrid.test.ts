import { describe, it, expect } from 'vitest';
import { createChestGrid } from './createChestGrid';
import { flatten } from 'lodash-es';
import { createChest } from '../createChest';
import { ChestGridSized } from '@/types/chestGrid';

describe('createChestGrid', () => {
  it.each([
    { numChests: 4 },
    { numChests: 6 },
    { numChests: 7 },
    { numChests: 9 },
  ] as const)(
    'should return a chest grid with $numChests chests',
    ({ numChests }) => {
      const createdGrid = createChestGrid({ numChests });
      expect(flatten(createdGrid.rows)).toHaveLength(numChests);
    }
  );
  it('should throw an error if an invalid number of chests is provided', () => {
    expect(() => {
      createChestGrid({ numChests: 10 as 9 });
    }).toThrowErrorMatchingInlineSnapshot(
      `[RangeError: Invalid number of chests provided]`
    );
  });
  it('should provide a chest grid prepopulated with rows if provided', () => {
    const rows = [
      [createChest(), createChest()],
      [createChest(), createChest()],
    ] satisfies ChestGridSized<4>['rows'];
    const grid = createChestGrid({ numChests: 4, initialRows: rows });
    expect(grid.rows).toEqual(rows);
  });
  it('should not duplicate rows if provided', () => {
    const rows = [
      [createChest(), createChest()],
      [createChest(), createChest()],
    ] satisfies ChestGridSized<4>['rows'];
    const grid = createChestGrid({ numChests: 4, initialRows: rows });
    expect(grid.rows).not.toBe(rows);
  });
});
