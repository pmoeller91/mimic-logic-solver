import { ValidGridSizes } from '@/types/chestGrid';
import clsx from 'clsx';
import React from 'react';
import { forwardRef } from 'react';

import styles from './genericGridWraper.module.scss';

interface GenericGridWrapperProps {
  className?: string;
  children?: React.ReactNode;
  gridSize: ValidGridSizes;
}

const GenericGridWrapper = forwardRef<HTMLDivElement, GenericGridWrapperProps>(
  function GenericGridWrapper({ className, children, gridSize }, ref) {
    const classNames = clsx(
      className,
      "grid",
      {
        [styles['grid-size-4']]: gridSize === 4,
        [styles['grid-size-6']]: gridSize === 6,
        [styles['grid-size-7']]: gridSize === 7,
        [styles['grid-size-9']]: gridSize === 9,
      }
    );
    return (
      <div className={classNames} ref={ref}>
        {children}
      </div>
    );
  }
);

export { GenericGridWrapper };
