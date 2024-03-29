import clsx from 'clsx';
import React from 'react';

interface ChestGridRowProps {
  className?: string;
  children?: React.ReactNode;
}

function ChestGridRow({ className, children }: ChestGridRowProps) {
  const classNames = clsx('flex flex-row gap-8 justify-center', className);
  return <div className={classNames}>{children}</div>;
}

export { ChestGridRow };
