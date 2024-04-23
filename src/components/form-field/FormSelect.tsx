import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface FormSelect extends ComponentPropsWithRef<'select'> {
  className?: string;
}

/**
 * Basic wrapper component for select that provides consistent styling within
 * properties drawer.
 */
const FormSelect = forwardRef<HTMLSelectElement, FormSelect>(
  function EditChestInfoSelect(
    { className, children, ...additionalProps },
    ref
  ) {
    return (
      <select
        className={clsx(
          'bg-bg-light px-2 py-1 ml-8 w-48 lg:w-auto text-right',
          className
        )}
        ref={ref}
        {...additionalProps}
      >
        {children}
      </select>
    );
  }
);

export { FormSelect };
