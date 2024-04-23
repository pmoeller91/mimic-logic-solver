import { CHEST_COLOR, ChestColor } from '@/types/chestProperties';
import { SimpleWritableAtom } from '@/types/simpleWritableAtom';
import { useAtom } from 'jotai';
import { FormField } from '../../../form-field/FormField';
import { FormSelect } from '../../../form-field/FormSelect';
import { useCallback } from 'use-memo-one';
import { DefinedAttribute } from '@/types/definedAttribute';
import { useTranslation } from 'react-i18next';

interface ColorFieldProps {
  colorAtom: SimpleWritableAtom<ChestColor>;
  // Help distinguish between duplicate params (ex two "Color" params for
  // one hint)
  position?: number;
}

function ColorField({ colorAtom, position }: ColorFieldProps) {
  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useAtom(colorAtom);
  const handleOnChange = useCallback<DefinedAttribute<'select', 'onChange'>>(
    (e) => {
      setSelectedColor(e.target.value as ChestColor);
    },
    [setSelectedColor]
  );
  let label: string;
  if (position) {
    label = t('editChestInfo.chestHintSection.param.color.label', {
      count: position,
      ordinal: true,
    });
  } else {
    label = t('editChestInfo.chestHintSection.param.color.label');
  }
  return (
    <FormField label={label}>
      <FormSelect value={selectedColor} onChange={handleOnChange}>
        {Object.values(CHEST_COLOR).map((chestColor) => (
          <option key={chestColor} value={chestColor}>
            {t(
              `editChestInfo.chestHintSection.param.color.colors.${chestColor}`
            )}
          </option>
        ))}
      </FormSelect>
    </FormField>
  );
}

export { ColorField };
