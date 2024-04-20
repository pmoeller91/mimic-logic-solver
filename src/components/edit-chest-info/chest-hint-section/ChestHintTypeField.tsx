import React, { forwardRef } from 'react';
import { ChestPropertiesField } from '../ChestPropertiesField';
import { CHEST_HINT_TYPE, ChestHintType } from '@/types/chestHint';
import { useTranslation } from 'react-i18next';
import { useSelectedChestAtom } from '@/hooks/useSelectedChestAtom';
import { focusAtom } from 'jotai-optics';
import { useCallback, useMemo } from 'use-memo-one';
import { useAtom } from 'jotai';
import { getGameTranslation } from '@/util/getGameTranslation';
import { TRANSLATION_TYPE } from '@/types/translation';
import { getDefaultHint } from '@/util/getDefaultHint';
import { EditChestInfoSelect } from '../EditChestInfoSelect';

interface ChestHintTypeFieldProps {
  className?: string;
}

type SelectCallback = Required<JSX.IntrinsicElements['select']>['onChange'];

interface ChestHintGroup {
  label: string;
  id: string;
  options: ChestHintType[];
}

const chestHintGroups: ChestHintGroup[] = [
  {
    label: 'editChestInfo.chestHintSection.type.group.self',
    id: 'self',
    options: [CHEST_HINT_TYPE.selfAsleep, CHEST_HINT_TYPE.selfNotMimic],
  },
  {
    label: 'editChestInfo.chestHintSection.type.group.direction',
    id: 'direction',
    options: [
      CHEST_HINT_TYPE.directionMimic,
      CHEST_HINT_TYPE.directionNotMimic,
      CHEST_HINT_TYPE.directionGold,
      CHEST_HINT_TYPE.directionNotGold,
    ],
  },
  {
    label: 'editChestInfo.chestHintSection.type.group.color',
    id: 'color',
    options: [
      CHEST_HINT_TYPE.colorMimic,
      CHEST_HINT_TYPE.colorNoMimic,
      CHEST_HINT_TYPE.colorGold,
      CHEST_HINT_TYPE.colorNoGold,
      CHEST_HINT_TYPE.mimicsSameColor,
      CHEST_HINT_TYPE.mimicsNotSameColor,
      CHEST_HINT_TYPE.colorNumMimics,
      CHEST_HINT_TYPE.colorMoreMimics,
      CHEST_HINT_TYPE.colorSameMimics,
    ],
  },
  {
    label: 'editChestInfo.chestHintSection.type.group.rank',
    id: 'rank',
    options: [
      CHEST_HINT_TYPE.rankMimic,
      CHEST_HINT_TYPE.rankNoMimic,
      CHEST_HINT_TYPE.rankGold,
      CHEST_HINT_TYPE.rankNoGold,
      CHEST_HINT_TYPE.rankMinimumMimics,
      CHEST_HINT_TYPE.rankMoreMimics,
      CHEST_HINT_TYPE.rankSameMimics,
    ],
  },
];

const ChestHintTypeField = forwardRef<
  HTMLSelectElement,
  ChestHintTypeFieldProps
>(function ChestHintField({ className }, ref) {
  const { t } = useTranslation();
  const selectedChestAtom = useSelectedChestAtom();
  const chestHintAtom = useMemo(
    () => focusAtom(selectedChestAtom, (optic) => optic.prop('hint')),
    [selectedChestAtom]
  );
  const [selectedChestHint, setSelectedChestHint] = useAtom(chestHintAtom);
  const handleOnChange = useCallback<SelectCallback>(
    (e) => {
      const newHintType = e.target.value as ChestHintType;
      setSelectedChestHint(getDefaultHint(newHintType));
    },
    [setSelectedChestHint]
  );

  const label = t('editChestInfo.chestHintSection.type.label');

  return (
    <ChestPropertiesField label={label} className={className}>
      <EditChestInfoSelect
        className="lg:max-w-48"
        onChange={handleOnChange}
        value={selectedChestHint.type}
        ref={ref}
      >
        {chestHintGroups.map(({ label, options, id }, idx, arr) => (
          <React.Fragment key={id}>
            <optgroup label={t(label)} key={id}>
              {options.map((hintType) => (
                <option key={hintType} value={hintType}>
                  {getGameTranslation({
                    type: TRANSLATION_TYPE.chestHintBlank,
                    key: hintType,
                    t,
                  })}
                </option>
              ))}
            </optgroup>
            {idx !== arr.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </EditChestInfoSelect>
    </ChestPropertiesField>
  );
});

export { ChestHintTypeField };
