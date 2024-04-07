import clsx from 'clsx';
import React from 'react';

interface ChestGridWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

function ChestGridWrapper({ className, children }: ChestGridWrapperProps) {
  const classNames = clsx(
    className,
    'w-full lg:w-1/2 grid grid-cols-6 gap-1 sm:gap-2 lg:gap-8 m-auto'
  );
  return <div className={classNames}>{children}</div>;
}

export { ChestGridWrapper };
