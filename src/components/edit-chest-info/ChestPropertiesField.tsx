import { useStableId } from '@/hooks/useStableId';
import clsx from 'clsx';
import React, { ComponentPropsWithRef, cloneElement } from 'react';
import { forwardRef } from 'react';

interface ChestPropertiesFieldProps extends ComponentPropsWithRef<'div'> {
  label: string;
  children: React.ReactElement;
  className?: string;
}

/**
 *  Wraps an input element and provides it with the specified label.
 *  Automatically sets IDs and associated aria attributes. Handles the styling
 *  for the single field.
 */
const ChestPropertiesField = forwardRef<
  HTMLDivElement,
  ChestPropertiesFieldProps
>(function ChestPropertiesField(
  { children, label, className, ...additionalProps },
  ref
) {
  const idSuffix = useStableId();
  const inputId = `color-select-${idSuffix}`;
  const labelId = `color-select-${idSuffix}-label`;

  const inputElement = cloneElement(children, {
    id: inputId,
    'aria-labelledby': labelId,
    'data-vaul-no-drag': true,
  });

  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-between w-full',
        className
      )}
      ref={ref}
      {...additionalProps}
    >
      <label id={labelId} htmlFor={inputId}>
        {label}
      </label>
      {inputElement}
    </div>
  );
});

export { ChestPropertiesField };
