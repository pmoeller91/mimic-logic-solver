import { forwardRef } from 'react';
import {
  EditGameInfoView,
  EditGameInfoViewTranslations,
} from './EditGameInfoView';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'use-memo-one';

interface EditGameInfoContainerProps {
  onClose: () => void;
  additionalProps?: Record<string, unknown>;
}

const EditGameInfoContainer = forwardRef<
  HTMLDivElement,
  EditGameInfoContainerProps
>(function EditGameInfoContainer(
  { onClose, additionalProps }: EditGameInfoContainerProps,
  ref
) {
  const { t } = useTranslation();
  const translations: EditGameInfoViewTranslations = useMemo(
    () => ({
      title: t('editGameInfo.title'),
      gearLabel: t('editGameInfo.gearLabel'),
      goldLabel: t('editGameInfo.goldLabel'),
      itemsLabel: t('editGameInfo.itemsLabel'),
      mimicsLabel: t('editGameInfo.mimicsLabel'),
      optionalPlaceholder: t('editGameInfo.optionalPlaceholder'),
    }),
    [t]
  );

  return (
    <EditGameInfoView
      ref={ref}
      additionalProps={additionalProps}
      onClose={onClose}
      translations={translations}
    />
  );
});

export { EditGameInfoContainer };
