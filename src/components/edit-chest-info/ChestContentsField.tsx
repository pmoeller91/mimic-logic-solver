import { forwardRef } from 'react';
import { FormField } from '../form-field/FormField';
import { FormSelect } from '../form-field/FormSelect';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'use-memo-one';
import { focusAtom } from 'jotai-optics';
import { useAtom, useAtomValue } from 'jotai';
import { CHEST_CONTENTS, ChestContents } from '@/types/chestProperties';
import { getGameTranslation } from '@/util/getGameTranslation';
import { TRANSLATION_TYPE } from '@/types/translation';
import { selectedChestAtomAtom } from '@/atoms/selectedChestAtomAtom';

interface ChestContentsFieldProps {
  className?: string;
}
type SelectCallback = Required<JSX.IntrinsicElements['select']>['onChange'];

const ChestContentsField = forwardRef<
  HTMLSelectElement,
  ChestContentsFieldProps
>(function ChestContentsField({ className }, ref) {
  const { t } = useTranslation();
  const label = t('editChestInfo.chestPropertiesSection.chestContents.label');

  const selectedChestAtom = useAtomValue(selectedChestAtomAtom);
  const chestContentsAtom = useMemo(
    () => focusAtom(selectedChestAtom, (optic) => optic.prop('contents')),
    [selectedChestAtom]
  );

  const [chestContents, setChestContents] = useAtom(chestContentsAtom);

  const handleOnChange = useCallback<SelectCallback>(
    (e) => {
      const newContents = e.target.value as ChestContents;
      setChestContents(newContents);
    },
    [setChestContents]
  );

  return (
    <FormField label={label} className={className}>
      <FormSelect ref={ref} value={chestContents} onChange={handleOnChange}>
        {Object.values(CHEST_CONTENTS).map((contents) => (
          <option key={contents} value={contents}>
            {getGameTranslation({
              type: TRANSLATION_TYPE.chestContents,
              key: contents,
              t,
            })}
          </option>
        ))}
      </FormSelect>
    </FormField>
  );
});

export { ChestContentsField };
