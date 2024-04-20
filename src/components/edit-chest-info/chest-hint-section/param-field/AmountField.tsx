import { SimpleWritableAtom } from '@/types/simpleWritableAtom';
import { useAtom } from 'jotai';
import { ChestPropertiesField } from '../../ChestPropertiesField';
import { EditChestInfoSelect } from '../../EditChestInfoSelect';
import { useCallback } from 'use-memo-one';
import { DefinedAttribute } from '@/types/definedAttribute';
import { useTranslation } from 'react-i18next';

interface AmountFieldProps {
  amountAtom: SimpleWritableAtom<number>;
  // Help distinguish between duplicate params (ex two "Color" params for
  // one hint)
  position?: number;
}

const validAmounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function AmountField({ amountAtom, position }: AmountFieldProps) {
  const { t } = useTranslation();
  const [amount, setAmount] = useAtom(amountAtom);
  const handleOnChange = useCallback<DefinedAttribute<'select', 'onChange'>>(
    (e) => {
      setAmount(Number.parseInt(e.target.value, 10));
    },
    [setAmount]
  );
  let label: string;
  if (position) {
    label = t('editChestInfo.chestHintSection.param.amount.label', {
      count: position,
      ordinal: true,
    });
  } else {
    label = t('editChestInfo.chestHintSection.param.amount.label');
  }
  return (
    <ChestPropertiesField label={label}>
      <EditChestInfoSelect value={amount} onChange={handleOnChange}>
        {validAmounts.map((validAmount) => (
          <option key={validAmount} value={validAmount}>
            {t(`editChestInfo.chestHintSection.param.amount.optionLabel`, {
              amount: validAmount,
            })}
          </option>
        ))}
      </EditChestInfoSelect>
    </ChestPropertiesField>
  );
}

export { AmountField };
