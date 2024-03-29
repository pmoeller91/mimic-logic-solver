import clsx from 'clsx';
import React from 'react';

interface ChestGridWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

function ChestGridWrapper({ className, children }: ChestGridWrapperProps) {
  const classNames = clsx(className, 'flex flex-col gap-8');
  return <div className={classNames}>{children}</div>;
}

export { ChestGridWrapper };
