import { describe, it, expect } from 'vitest';
import { createChest, defaultChest } from './createChest';
import { CHEST_COLOR, CHEST_CONTENTS } from '@/types/chestProperties';
import { Chest } from '@/types/chest';
import { CHEST_HINT_TYPE } from '@/types/chestHint';

describe('createChest', () => {
  it('should create a default chest when provided with no parameters', () => {
    expect(createChest()).toEqual(defaultChest);
  });
  it('should create a different chest object with each call', () => {
    expect(createChest()).not.toBe(createChest());
  });
  it('should create a valid chest from partial properties', () => {
    const expectedChest = { ...defaultChest, contents: CHEST_CONTENTS.mimic };
    expect(createChest({ contents: CHEST_CONTENTS.mimic })).toEqual(
      expectedChest
    );
  });
  it('should create a valid chest if all properties are provided', () => {
    const expectedChest: Required<Chest> = {
      color: CHEST_COLOR.red,
      contents: CHEST_CONTENTS.gear,
      hint: { type: CHEST_HINT_TYPE.selfAsleep, params: [] },
    };
    expect(createChest(expectedChest)).toEqual(expectedChest);
  });
  it('should create a completely different chest each time even if all properties are provided', () => {
    const baseChest = {
      color: CHEST_COLOR.red,
      contents: CHEST_CONTENTS.gear,
      hint: { type: CHEST_HINT_TYPE.selfAsleep, params: [] },
    } satisfies Required<Chest>;
    const createdChest = createChest(baseChest);
    expect(createdChest).not.toBe(baseChest);
    expect(createdChest).not.toBe(createChest(baseChest));
    expect(createdChest.hint).not.toBe(baseChest.hint);
    expect(createdChest.hint).not.toBe(createChest(baseChest).hint);
    expect(createdChest.hint.params).not.toBe(baseChest.hint.params);
    expect(createdChest.hint.params).not.toBe(
      createChest(baseChest).hint.params
    );
  });
});
