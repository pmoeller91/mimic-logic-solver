import clsx from 'clsx';
import React from 'react';

interface MiniChestGridRowProps {
  className?: string;
  children?: React.ReactNode;
}

function MiniChestGridRow({ className, children }: MiniChestGridRowProps) {
  const classNames = clsx('flex flex-row gap-1 justify-center', className);
  return <div className={classNames}>{children}</div>;
}

export { MiniChestGridRow };
