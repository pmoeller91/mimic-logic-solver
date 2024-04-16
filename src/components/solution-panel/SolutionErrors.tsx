import { errorMessagesAtom } from '@/atoms/solver/errorMessagesAtom';
import { isErrorAtom } from '@/atoms/solver/isErrorAtom';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

interface SolutionErrorsProps extends ComponentPropsWithRef<'div'> {
  className?: string;
}

const SolutionErrors = forwardRef<HTMLDivElement, SolutionErrorsProps>(
  function SolutionErrors({ className, ...rest }, ref) {
    const { t } = useTranslation();
    const isError = useAtomValue(isErrorAtom);
    const errorMessages = useAtomValue(errorMessagesAtom);
    const baseErrorMessage = t('solutionErrors.errorsOccurred');

    return (
      <div
        ref={ref}
        className={clsx('flex flex-col gap-2', className)}
        aria-live="polite"
        {...rest}
      >
        {isError && errorMessages.length > 0 && <div>{baseErrorMessage}</div>}
        {errorMessages.map((errorMessage, i) => (
          <div key={`error-${i}`}>{t(...errorMessage)}</div>
        ))}
      </div>
    );
  }
);

export { SolutionErrors };
