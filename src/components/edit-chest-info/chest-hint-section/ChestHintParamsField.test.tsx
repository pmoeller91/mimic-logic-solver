import { expect, it, describe, beforeEach, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { CHEST_HINT_TYPE, ChestHintType } from '@/types/chestHint';
import { ChestHintParamsField } from './ChestHintParamsField';
import { createStore } from 'jotai';
import { selectedChestAtomAtom } from '@/atoms/selectedChestAtomAtom';
import { getDefaultHint } from '@/util/getDefaultHint';
import { paramFieldErrorTestId } from './param-field/paramFieldErrorTestId';

vi.mock('react-i18next');

describe('ChestHintParamsField', () => {
  let testStore: ReturnType<typeof createStore>;
  beforeEach(() => {
    testStore = createStore();
  });
  afterEach(() => {
    cleanup();
  });
  describe('for any valid chest-hint type', () => {
    const validHintTypes = Object.values(CHEST_HINT_TYPE).filter(
      (hintType) => hintType !== CHEST_HINT_TYPE.__error
    );
    it.each(validHintTypes)(
      'should not render an error element for the chest-hint type "%s"',
      (chestHintType) => {
        const selectedChestAtom = testStore.get(selectedChestAtomAtom);
        const selectedChest = testStore.get(selectedChestAtom);
        selectedChest.hint = getDefaultHint(chestHintType);
        render(<ChestHintParamsField />);
        const errorElements = screen.queryAllByTestId(paramFieldErrorTestId);
        expect(errorElements, 'There should be no error element').toHaveLength(
          0
        );
      }
    );
  });
  describe('for the ERROR chest-hint type', () => {
    it('should render an error element', () => {
      const selectedChestAtom = testStore.get(selectedChestAtomAtom);
      const selectedChest = testStore.get(selectedChestAtom);
      selectedChest.hint = getDefaultHint(CHEST_HINT_TYPE.selfAsleep);
      selectedChest.hint.type = CHEST_HINT_TYPE.__error;
      render(<ChestHintParamsField />);
      const errorElements = screen.queryAllByTestId(paramFieldErrorTestId);
      expect(errorElements, 'There must be one error element').toHaveLength(1);
    });
  });
  describe('for any invalid chest-hint type', () => {
    it('should render an error element', () => {
      const selectedChestAtom = testStore.get(selectedChestAtomAtom);
      const selectedChest = testStore.get(selectedChestAtom);
      selectedChest.hint = getDefaultHint(CHEST_HINT_TYPE.selfAsleep);
      selectedChest.hint.type = '__NON_EXISTENT_HINT__' as ChestHintType;
      render(<ChestHintParamsField />);
      const errorElements = screen.queryAllByTestId(paramFieldErrorTestId);
      expect(errorElements, 'There must be one error element').toHaveLength(1);
    });
  });
});
