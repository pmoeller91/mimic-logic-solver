import { forwardRef } from 'react';
import {
  EditGameInfoView,
  EditGameInfoViewTranslations,
} from './EditGameInfoView';
import { useTranslation } from 'react-i18next';

interface EditGameInfoContainerProps {
  close: () => void;
  additionalProps?: Record<string, unknown>;
}

const EditGameInfoContainer = forwardRef<
  HTMLDivElement,
  EditGameInfoContainerProps
>(function EditGameInfoContainer(
  { close, additionalProps }: EditGameInfoContainerProps,
  ref
) {
  const { t } = useTranslation();
  const translations: EditGameInfoViewTranslations = {
    title: t('editGameInfo.title'),
    gearLabel: t('editGameInfo.gearLabel'),
    goldLabel: t('editGameInfo.goldLabel'),
    itemsLabel: t('editGameInfo.itemsLabel'),
    mimicsLabel: t('editGameInfo.mimicsLabel'),
    optionalPlaceholder: t('editGameInfo.optionalPlaceholder'),
  };

  return (
    <EditGameInfoView
      ref={ref}
      additionalProps={additionalProps}
      close={close}
      translations={translations}
    />
  );
});

export { EditGameInfoContainer };
