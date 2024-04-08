import clsx from 'clsx';
import React from 'react';

interface MiniChestGridWrapperProps {
  className?: string;
  legendString: string;
  children?: React.ReactNode;
}

function MiniChestGridSelectWrapper({
  className,
  children,
  legendString,
}: MiniChestGridWrapperProps) {
  const classNames = clsx(className, 'grid grid-cols-6 gap-1');
  return (
    <fieldset>
      <legend className="sr-only">{legendString}</legend>
      <div className={classNames}>{children}</div>
    </fieldset>
  );
}

export { MiniChestGridSelectWrapper };
