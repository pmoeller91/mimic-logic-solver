import { useSelectedChestAtom } from '@/hooks/useSelectedChestAtom';
import { useAtom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { useCallback, useMemo } from 'use-memo-one';
import { CHEST_COLOR, ChestColor } from '@/types/chestProperties';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChestPropertiesField } from './ChestPropertiesField';
import { ChestPropertiesSelect } from './ChestPropertiesSelect';

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
    const selectedChestAtom = useSelectedChestAtom();
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
      <ChestPropertiesField label={label} className={className}>
        <ChestPropertiesSelect
          onChange={handleOnChange}
          ref={ref}
          value={chestColor}
        >
          {Object.values(CHEST_COLOR).map((color) => (
            <option value={color} key={color}>
              {t(
                `editChestInfo.chestPropertiesSection.chestColor.colors.${color}`
              )}
            </option>
          ))}
        </ChestPropertiesSelect>
      </ChestPropertiesField>
    );
  }
);

export { ChestColorField };
