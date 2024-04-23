import { useSelectedChestAtom } from '@/hooks/useSelectedChestAtom';
import { CHEST_HINT_TYPE, ChestDirection, ChestRank } from '@/types/chestHint';
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
import { AmountField } from './param-field/AmountField';
import { RankField } from './param-field/RankField';

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
    case CHEST_HINT_TYPE.selfAsleep:
    case CHEST_HINT_TYPE.selfNotMimic:
    case CHEST_HINT_TYPE.mimicsNotSameColor:
    case CHEST_HINT_TYPE.mimicsSameColor:
      return null;
    case CHEST_HINT_TYPE.directionMimic:
    case CHEST_HINT_TYPE.directionGold:
    case CHEST_HINT_TYPE.directionNotMimic:
    case CHEST_HINT_TYPE.directionNotGold:
      return (
        <DirectionField
          directionAtom={paramAtoms[0] as SimpleWritableAtom<ChestDirection>}
        />
      );
    case CHEST_HINT_TYPE.colorGold:
    case CHEST_HINT_TYPE.colorMimic:
    case CHEST_HINT_TYPE.colorNoGold:
    case CHEST_HINT_TYPE.colorNoMimic:
      return (
        <ColorField
          colorAtom={paramAtoms[0] as SimpleWritableAtom<ChestColor>}
        />
      );
    case CHEST_HINT_TYPE.colorSameMimics:
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
    case CHEST_HINT_TYPE.colorNumMimics:
      return (
        <ReversibleParams
          paramFields={[
            <AmountField
              amountAtom={paramAtoms[0] as SimpleWritableAtom<number>}
              key="param-1"
            />,
            <ColorField
              colorAtom={paramAtoms[1] as SimpleWritableAtom<ChestColor>}
              key="param-2"
            />,
          ]}
          shouldReverse={isHintParamsReversed({ t, chestHintType })}
        />
      );
    case CHEST_HINT_TYPE.rankGold:
    case CHEST_HINT_TYPE.rankMimic:
    case CHEST_HINT_TYPE.rankNoGold:
    case CHEST_HINT_TYPE.rankNoMimic:
      return (
        <RankField rankAtom={paramAtoms[0] as SimpleWritableAtom<ChestRank>} />
      );
    case CHEST_HINT_TYPE.rankMoreMimics:
    case CHEST_HINT_TYPE.rankSameMimics:
      return (
        <ReversibleParams
          paramFields={[
            <RankField
              rankAtom={paramAtoms[0] as SimpleWritableAtom<ChestRank>}
              key="param-1"
            />,
            <RankField
              rankAtom={paramAtoms[1] as SimpleWritableAtom<ChestRank>}
              key="param-2"
            />,
          ]}
          shouldReverse={isHintParamsReversed({ t, chestHintType })}
          shouldProvidePosition
        />
      );
    case CHEST_HINT_TYPE.mimicsNumber:
      return (
        <AmountField amountAtom={paramAtoms[0] as SimpleWritableAtom<number>} />
      );
    default:
      return null;
  }
}

export { ChestHintParamsField };
