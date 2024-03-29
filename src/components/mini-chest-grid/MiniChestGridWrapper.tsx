import clsx from 'clsx';
import React from 'react';

interface MiniChestGridWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

function MiniChestGridWrapper({
  className,
  children,
}: MiniChestGridWrapperProps) {
  const classNames = clsx(className, 'flex flex-col gap-1');
  return <div className={classNames}>{children}</div>;
}

export { MiniChestGridWrapper };
