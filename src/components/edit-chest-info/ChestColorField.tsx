import { useAtom, useAtomValue } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { useCallback, useMemo } from 'use-memo-one';
import { CHEST_COLOR, ChestColor } from '@/types/chestColor';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FormField } from '../form-field/FormField';
import { FormSelect } from '../form-field/FormSelect';
import { selectedChestAtomAtom } from '@/atoms/selectedChestAtomAtom';

interface ChestColorFieldProps {
  className?: string;
}

type SelectCallback = Required<JSX.IntrinsicElements['select']>['onChange'];

/**
 * Single field that allows setting of the selected chest's color between
 * available colors.
 */
const ChestColorField = forwardRef<HTMLSelectElement, ChestColorFieldProps>(
  function ChestColorField({ className }, ref) {
    const { t } = useTranslation();
    const selectedChestAtom = useAtomValue(selectedChestAtomAtom);
    const chestColorAtom = useMemo(
      () => focusAtom(selectedChestAtom, (optic) => optic.prop('color')),
      [selectedChestAtom]
    );
    const [chestColor, setChestColor] = useAtom(chestColorAtom);
    const handleOnChange = useCallback<SelectCallback>(
      (e) => {
        const newColor = e.target.value as ChestColor;
        setChestColor(newColor);
      },
      [setChestColor]
    );

    const label = t('editChestInfo.chestPropertiesSection.chestColor.label');

    return (
      <FormField label={label} className={className}>
        <FormSelect onChange={handleOnChange} ref={ref} value={chestColor}>
          {Object.values(CHEST_COLOR).map((color) => (
            <option value={color} key={color}>
              {t(
                `editChestInfo.chestPropertiesSection.chestColor.colors.${color}`
              )}
            </option>
          ))}
        </FormSelect>
      </FormField>
    );
  }
);

export { ChestColorField };
