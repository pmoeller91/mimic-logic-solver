import { useSelectedChestAtom } from '@/hooks/useSelectedChestAtom';
import { CHEST_HINT_TYPE, ChestDirection } from '@/types/chestHint';
import { useAtomValue } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { useMemo } from 'use-memo-one';
import { ChestColor } from '@/types/chestProperties';
import { ColorField } from './param-field/ColorField';
import { SimpleWritableAtom } from '@/types/simpleWritableAtom';
import { DirectionField } from './param-field/DirectionField';
import { ReversibleParams } from './param-field/ReversibleParams';
import { isHintParamsReversed } from '@/util/isHintParamsReversed';
import { useTranslation } from 'react-i18next';

/**
 * Component that allows modifying all parameters associated with the current
 * hint type, based on the currently selected chest.
 */
function ChestHintParamsField() {
  const { t } = useTranslation();
  const selectedChestAtom = useSelectedChestAtom();
  const chestHintTypeAtom = useMemo(
    () =>
      focusAtom(selectedChestAtom, (optic) => optic.prop('hint').prop('type')),
    [selectedChestAtom]
  );
  const paramAtoms = useMemo(
    () => [
      focusAtom(selectedChestAtom, (optic) =>
        optic.prop('hint').prop('params').at(0)
      ),
      focusAtom(selectedChestAtom, (optic) =>
        optic.prop('hint').prop('params').at(1)
      ),
    ],
    [selectedChestAtom]
  );
  const chestHintType = useAtomValue(chestHintTypeAtom);

  switch (chestHintType) {
    case CHEST_HINT_TYPE.asleep:
    case CHEST_HINT_TYPE.mimicNotSelf:
      return null;
    case CHEST_HINT_TYPE.mimicDirection:
      return (
        <DirectionField
          directionAtom={paramAtoms[0] as SimpleWritableAtom<ChestDirection>}
        />
      );
    case CHEST_HINT_TYPE.colorMoreMimics:
      return (
        <ReversibleParams
          paramFields={[
            <ColorField
              colorAtom={paramAtoms[0] as SimpleWritableAtom<ChestColor>}
              key="param-1"
            />,
            <ColorField
              colorAtom={paramAtoms[1] as SimpleWritableAtom<ChestColor>}
              key="param-2"
            />,
          ]}
          shouldReverse={isHintParamsReversed({ t, chestHintType })}
          shouldProvidePosition
        />
      );
    default:
      return null;
  }
}

export { ChestHintParamsField };
