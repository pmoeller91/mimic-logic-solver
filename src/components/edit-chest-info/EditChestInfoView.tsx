import { forwardRef, useRef } from 'react';
import { PropertiesDrawerHeaderContainer } from '../properties-drawer-header/PropertiesDrawerHeaderContainer';
import { ChestSelector } from './ChestSelector';
import { ChestPropertiesSection } from './ChestPropertiesSection';
import { SelectedChestTile } from './SelectedChestTile';
import { ChestHintSection } from './chest-hint-section/ChestHintSection';
import clsx from 'clsx';
import { useIsOverflow } from '@/hooks/useIsOverflow';

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
    const overflowRef = useRef<HTMLDivElement>(null);
    const isOverflow = useIsOverflow(overflowRef);
    return (
      <div
        className={clsx('flex flex-col h-full', className)}
        ref={ref}
        {...additionalProps}
      >
        <PropertiesDrawerHeaderContainer
          title={translations.title}
          close={onClose}
        />
        <div
          className="px-8 py-4 flex flex-col items-center flex-grow flex-shrink overflow-auto"
          // Prevent vaul from interfering with scrolling when overflow is present
          data-vaul-no-drag={isOverflow ? 'true' : undefined}
          ref={overflowRef}
        >
          <ChestSelector className="mb-4" />
          <SelectedChestTile className="w-48" />
          <ChestPropertiesSection />
          <ChestHintSection />
        </div>
      </div>
    );
  }
);

export { EditChestInfoView };
export type { EditChestInfoViewProps, EditChestInfoViewTranslations };
