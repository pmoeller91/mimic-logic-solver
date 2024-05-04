import { ComponentPropsWithRef, MouseEventHandler, forwardRef } from "react";
import { Button } from "../button/Button";

interface OpenPropertiesDrawerButtonViewProps extends ComponentPropsWithRef<"button"> {
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isOpen: boolean;
  children?: React.ReactNode;
  propertiesDrawerId: string;
}

const OpenPropertiesDrawerButtonView = forwardRef<
  HTMLButtonElement,
  OpenPropertiesDrawerButtonViewProps
>(function OpenPropertiesDrawerButtonView(
  { children, handleOnClick, className, isOpen, propertiesDrawerId, ...rest },
  ref,
) {
  return (
    <Button
      {...rest}
      onClick={handleOnClick}
      className={className}
      aria-haspopup="dialog"
      aria-expanded={isOpen ? "true" : "false"}
      aria-controls={propertiesDrawerId}
      ref={ref}
    >
      {children}
    </Button>
  );
});

export { OpenPropertiesDrawerButtonView };
