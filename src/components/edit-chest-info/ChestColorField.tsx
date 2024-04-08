import { useSelectedChestAtom } from '@/hooks/useSelectedChestAtom';
import { useAtom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { useCallback, useMemo } from 'use-memo-one';
import { CHEST_COLOR, ChestColor } from '@/types/chestProperties';
import { forwardRef } from 'react';
import { useStableId } from '@/hooks/useStableId';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

interface ChestColorFieldProps {
  className?: string;
}

type SelectCallback = Required<JSX.IntrinsicElements['select']>['onChange'];

const ChestColorField = forwardRef<HTMLSelectElement, ChestColorFieldProps>(
  function ChestColorField({ className }, ref) {
    const { t } = useTranslation();
    const idSuffix = useStableId();
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

    const selectId = `color-select-${idSuffix}`;
    const labelId = `color-select-${idSuffix}-label`;

    return (
      <div
        className={clsx(
          'flex flex-row items-center justify-between w-full',
          className
        )}
      >
        <label id={labelId} htmlFor={selectId}>
          {t('editChestInfo.chestPropertiesSection.chestColor.label')}
        </label>
        <select
          id={selectId}
          onChange={handleOnChange}
          className="bg-bg-light px-2 py-1 ml-4 w-48 lg:w-auto"
          ref={ref}
          value={chestColor}
          aria-labelledby={labelId}
          data-vaul-no-drag
        >
          <option value={CHEST_COLOR.red}>
            {t('editChestInfo.chestPropertiesSection.chestColor.colors.red')}
          </option>
          <option value={CHEST_COLOR.blue}>
            {t('editChestInfo.chestPropertiesSection.chestColor.colors.blue')}
          </option>
          <option value={CHEST_COLOR.black}>
            {t('editChestInfo.chestPropertiesSection.chestColor.colors.black')}
          </option>
        </select>
      </div>
    );
  }
);

export { ChestColorField };
