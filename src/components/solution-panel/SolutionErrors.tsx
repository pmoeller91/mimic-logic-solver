import { errorMessagesAtom } from "@/atoms/solver/errorMessagesAtom";
import { isErrorAtom } from "@/atoms/solver/isErrorAtom";
import { isNoValidSolutionAtom } from "@/atoms/solver/isNoValidSolutionAtom";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { ComponentPropsWithRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";

interface SolutionErrorsProps extends ComponentPropsWithRef<"div"> {
  className?: string;
}

const SolutionErrors = forwardRef<HTMLDivElement, SolutionErrorsProps>(function SolutionErrors(
  { className, ...rest },
  ref,
) {
  const { t } = useTranslation();
  const isError = useAtomValue(isErrorAtom);
  const errorMessages = useAtomValue(errorMessagesAtom);
  const isNoValidSolution = useAtomValue(isNoValidSolutionAtom);
  const baseErrorMessage = t("solutionErrors.errorsOccurred");
  const noValidSolution = t("solutionErrors.noValidSolution");

  return (
    <div ref={ref} className={clsx("bg-red-600/40", className)} aria-live="polite" {...rest}>
      {isError && errorMessages.length > 0 && (
        <div className="m-4">
          <div>{baseErrorMessage}</div>
          <ul className="flex flex-col gap-2 ml-4 mt-2">
            {errorMessages.map((errorMessage, i) => (
              <li key={`error-${i}`} className="">
                {t(...errorMessage)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isNoValidSolution && (
        <div className="m-4">
          <div>{noValidSolution}</div>
        </div>
      )}
    </div>
  );
});

export { SolutionErrors };
