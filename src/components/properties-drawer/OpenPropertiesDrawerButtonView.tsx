import { MouseEventHandler, forwardRef } from 'react';

interface OpenPropertiesDrawerButtonViewProps {
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
  { children, handleOnClick, className, isOpen, propertiesDrawerId },
  ref
) {
  return (
    <button
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
