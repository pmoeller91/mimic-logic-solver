import { Suspense, forwardRef, lazy } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface CenterPanelFallbackProps {
  className?: string;
}

const Spinner = lazy(async () => ({
  default: (await import("@/components/spinner/Spinner")).Spinner,
}));

const CenterPanelFallback = forwardRef<HTMLDivElement, CenterPanelFallbackProps>(
  function CenterPanelFallback({ className }, ref) {
    const { t } = useTranslation();
    const loadingLabel = t("centerPanelFallback.loadingLabel");
    return (
      <div
        className={clsx(
          "flex flex-grow flex-col bg-bg-light/60 items-center justify-center",
          className,
        )}
        ref={ref}
      >
        <Suspense fallback={<div className="text-center">{loadingLabel}</div>}>
          <Spinner className="h-16 w-16" />
        </Suspense>
      </div>
    );
  },
);

export { CenterPanelFallback };
