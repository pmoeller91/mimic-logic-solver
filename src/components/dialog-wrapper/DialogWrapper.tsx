import clsx from "clsx";
import React, { ComponentPropsWithRef, forwardRef } from "react";
import { CloseButtonContainer } from "../close-button/CloseButtonContainer";

interface ModalWrapperProps extends ComponentPropsWithRef<"div"> {
  className?: string;
  close: () => void;
  title: string;
  titleAs?: React.ElementType;
}

const DialogWrapper = forwardRef<HTMLDivElement, ModalWrapperProps>(function ModalWrapper(
  { className, title, close, children, titleAs, ...remainingProps },
  ref,
) {
  const TitleElement = titleAs ?? "h2";
  return (
    <div
      className={clsx(
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-bg-light border-slate-500 rounded-lg overflow-hidden",
        className,
      )}
      {...remainingProps}
      ref={ref}
    >
      <div className="flex flex-row items-center pl-4 pr-2 py-4 bg-pd">
        <TitleElement>{title}</TitleElement>
        <CloseButtonContainer close={close} className="ml-auto" />
      </div>
      {children}
    </div>
  );
});

export { DialogWrapper };
