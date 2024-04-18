import { ComponentPropsWithRef, MouseEventHandler, forwardRef } from 'react';

interface OpenPropertiesDrawerButtonViewProps
  extends ComponentPropsWithRef<'button'> {
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
  ref
) {
  return (
    <button
      {...rest}
      onClick={handleOnClick}
      className={className}
      aria-haspopup="dialog"
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-controls={propertiesDrawerId}
      ref={ref}
    >
      {children}
    </button>
  );
});

export { OpenPropertiesDrawerButtonView };
