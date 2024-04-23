import { forwardRef } from 'react';
import { PropertiesDrawerHeaderContainer } from '../properties-drawer-header/PropertiesDrawerHeaderContainer';
import { ChestLayoutSelectorContainer } from '../chest-layout-selector/ChestLayoutSelectorContainer';
import { GameInfoField } from './ValidatedGameInfoField';
import { numMimicsFormValueAtom } from '@/atoms/numMimicsFormValueAtom';
import { numGoldFormValueAtom } from '@/atoms/numGoldFormValueAtom';
import { numGearFormValueAtom } from '@/atoms/numGearFormValueAtom';
import { numItemsFormValueAtom } from '@/atoms/numItemsFormValueAtom';
import { GameModeSelect } from './GameModeSelect';

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
  onClose: () => void;
  translations: EditGameInfoViewTranslations;
}

const EditGameInfoView = forwardRef<HTMLDivElement, EditGameInfoViewProps>(
  function EditGameInfoView({ additionalProps, onClose, translations }, ref) {
    return (
      <div {...additionalProps} ref={ref}>
        <PropertiesDrawerHeaderContainer
          title={translations.title}
          close={onClose}
        />

        <div className="px-8 pt-4">
          <ChestLayoutSelectorContainer />
        </div>

        <hr className="border-cl h-0 my-4 mx-2" />

        <GameModeSelect className="px-8" />
        
        <hr className="border-cl h-0 my-4 mx-2" />

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
