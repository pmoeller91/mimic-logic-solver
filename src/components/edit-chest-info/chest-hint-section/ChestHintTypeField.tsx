import { forwardRef } from 'react';
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
        {Object.values(CHEST_HINT_TYPE).map((chestHintType) => (
          <option key={chestHintType} value={chestHintType}>
            {getGameTranslation({
              type: TRANSLATION_TYPE.chestHintBlank,
              key: chestHintType,
              t,
            })}
          </option>
        ))}
      </EditChestInfoSelect>
    </ChestPropertiesField>
  );
});

export { ChestHintTypeField };
