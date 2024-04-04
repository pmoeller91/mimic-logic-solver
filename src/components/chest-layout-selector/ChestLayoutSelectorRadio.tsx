import { createChestGrid } from '@/util/chest-grid/createChestGrid';
import { MiniChestGrid } from '../mini-chest-grid/MiniChestGrid';
import { ValidGridSizes } from '@/types/chestGrid';
import { useMemo } from 'use-memo-one';
import { useStableId } from '@/hooks/useStableId';
import { useTranslation } from 'react-i18next';

interface ChestLayoutSelectorRadioProps {
  numChests: ValidGridSizes;
  checked?: boolean;
  onChange: Required<JSX.IntrinsicElements['input']>['onChange'];
}

function ChestLayoutSelectorRadio({
  numChests,
  checked,
  onChange,
}: ChestLayoutSelectorRadioProps) {
  const chestGrid = useMemo(() => {
    return createChestGrid({ numChests });
  }, [numChests]);
  const { t } = useTranslation();
  const label = t('chestLayoutSelector.numChests', { count: numChests });
  const idSuffix = useStableId();
  const inputId = `chest-selector-${idSuffix}`;
  return (
    <div className="relative h-32 w-32 m-2 group">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="opacity-0 absolute top-0 left-0 h-full w-full m-0 cursor-pointer"
        value={numChests}
        id={inputId}
      />
      <div className="flex flex-col gap-2 items-center justify-center h-full w-full border-2 border-c rounded-md p-4 transition-transform group-has-[:checked]:bg-c group-has-[:checked]:scale-105 group-has-[:focus]:border-cll group-has-[:focus]:border-4">
        <div aria-hidden="true">
          <MiniChestGrid grid={chestGrid} className="p-2" />
        </div>
        <label
          htmlFor={inputId}
          className="text-center text-text-primary group-has-[:checked]:text-white"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export { ChestLayoutSelectorRadio };