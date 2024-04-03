import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface PropertiesDrawerWrapperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction: 'bottom' | 'right';
  children: React.ReactNode;
  className?: string;
}

const PropertiesDrawerWrapper = forwardRef<
  HTMLDivElement,
  PropertiesDrawerWrapperProps
>(function PropertiesDrawerWrapper(
  { direction, children, className, ...extraProps },
  ref
) {
  const sharedClasses =
    'bg-bg-dark flex flex-col fixed bottom-0 right-0 border-slate-500 ';
  const rightClasses = 'h-full w-auto max-w-[50%] min-w-32 shadow-container-left';
  const bottomClasses = 'w-full h-screen shadow-container-top';
  const computedClassNames = clsx(
    className,
    sharedClasses,
    direction === 'bottom' && bottomClasses,
    direction === 'right' && rightClasses
  );
  return (
    <div ref={ref} className={computedClassNames} {...extraProps}>
      {children}
    </div>
  );
});

export { PropertiesDrawerWrapper };
