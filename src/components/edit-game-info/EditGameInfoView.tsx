import { forwardRef } from 'react';
import { PropertiesDrawerHeaderContainer } from '../properties-drawer-header/PropertiesDrawerHeaderContainer';
import { ChestLayoutSelectorContainer } from '../chest-layout-selector/ChestLayoutSelectorContainer';
import { GameInfoField } from './GameInfoField';
import { numMimicsFormValueAtom } from '@/atoms/numMimicsFormValueAtom';
import { numGoldFormValueAtom } from '@/atoms/numGoldFormValueAtom';
import { numGearFormValueAtom } from '@/atoms/numGearFormValueAtom';
import { numItemsFormValueAtom } from '@/atoms/numItemsFormValueAtom';

interface EditGameInfoViewTranslations {
  mimicsLabel: string;
  goldLabel: string;
  gearLabel: string;
  itemsLabel: string;
  optionalPlaceholder: string;
  title: string;
}

interface EditGameInfoViewProps {
  additionalProps?: Record<string, unknown>;
  close: () => void;
  translations: EditGameInfoViewTranslations;
}

const EditGameInfoView = forwardRef<HTMLDivElement, EditGameInfoViewProps>(
  function EditGameInfoView({ additionalProps, close, translations }, ref) {
    return (
      <div {...additionalProps} ref={ref}>
        <PropertiesDrawerHeaderContainer
          title={translations.title}
          close={close}
        />
        <div className="px-8 py-4">
          <ChestLayoutSelectorContainer />
        </div>

        <div className="pb-4">
          <div className="flex flex-col">
            <div className="odd:bg-bg-light px-8 py-2">
              <GameInfoField
                label={translations.mimicsLabel}
                formValueAtom={numMimicsFormValueAtom}
                placeholder={translations.optionalPlaceholder}
              />
            </div>
            <div className="odd:bg-bg-light px-8 py-2">
              <GameInfoField
                label={translations.goldLabel}
                formValueAtom={numGoldFormValueAtom}
                placeholder={translations.optionalPlaceholder}
                optional
              />
            </div>
            <div className="odd:bg-bg-light px-8 py-2">
              <GameInfoField
                label={translations.gearLabel}
                formValueAtom={numGearFormValueAtom}
                placeholder={translations.optionalPlaceholder}
                optional
              />
            </div>
            <div className="odd:bg-bg-light px-8 py-2">
              <GameInfoField
                label={translations.itemsLabel}
                formValueAtom={numItemsFormValueAtom}
                placeholder={translations.optionalPlaceholder}
                optional
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { EditGameInfoView };
export type { EditGameInfoViewProps, EditGameInfoViewTranslations };
