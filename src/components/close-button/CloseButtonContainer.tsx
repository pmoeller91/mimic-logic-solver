import { useTranslation } from 'react-i18next';
import { CloseButtonView } from './CloseButtonView';
import { useCallback } from 'use-memo-one';
import { ComponentProps } from '@/types/componentProps';

interface CloseButtonContainerProps {
  close: () => void;
}

type OnClickHandler = ComponentProps<typeof CloseButtonView>['onClick'];

function CloseButtonContainer({ close }: CloseButtonContainerProps) {
  const { t } = useTranslation();
  const ariaLabel = t('closeButton.ariaLabel');
  const handleOnClick: OnClickHandler = useCallback(() => {
    console.log("Hello I'm trying!!");
    close();
  }, [close]);
  return <CloseButtonView ariaLabel={ariaLabel} onClick={handleOnClick} />;
}

export { CloseButtonContainer };
