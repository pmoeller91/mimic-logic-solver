import { useTranslation } from 'react-i18next';
import { CloseButtonView } from './CloseButtonView';
import { useCallback } from 'use-memo-one';
import { ComponentProps } from 'react';

interface CloseButtonContainerProps {
  close: () => void;
  className?: string;
}

type OnClickHandler = ComponentProps<typeof CloseButtonView>['onClick'];

function CloseButtonContainer({ close, className }: CloseButtonContainerProps) {
  const { t } = useTranslation();
  const ariaLabel = t('closeButton.ariaLabel');
  const handleOnClick: OnClickHandler = useCallback(() => {
    close();
  }, [close]);
  return (
    <CloseButtonView
      ariaLabel={ariaLabel}
      onClick={handleOnClick}
      className={className}
    />
  );
}

export { CloseButtonContainer };
