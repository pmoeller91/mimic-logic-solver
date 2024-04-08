import { forwardRef } from 'react';
import { PropertiesDrawerHeaderContainer } from '../properties-drawer-header/PropertiesDrawerHeaderContainer';
import { ChestSelector } from './ChestSelector';
import { ChestPropertiesSection } from './ChestPropertiesSection';
import { SelectedChestTile } from './SelectedChestTile';

interface EditChestInfoViewTranslations {
  title: string;
}

interface EditChestInfoViewProps {
  onClose: () => void;
  className?: string;
  additionalProps?: Record<string, unknown>;
  translations: EditChestInfoViewTranslations;
}

const EditChestInfoView = forwardRef<HTMLDivElement, EditChestInfoViewProps>(
  function EditChestInfoView(
    { className, additionalProps, onClose, translations },
    ref
  ) {
    return (
      <div className={className} ref={ref} {...additionalProps}>
        <PropertiesDrawerHeaderContainer
          title={translations.title}
          close={onClose}
        />
        <div className="px-8 py-4 flex flex-col items-center">
          <ChestSelector className="mb-4" />
          <SelectedChestTile className="w-48" />
          <ChestPropertiesSection />
        </div>
      </div>
    );
  }
);

export { EditChestInfoView };
export type { EditChestInfoViewProps, EditChestInfoViewTranslations };
