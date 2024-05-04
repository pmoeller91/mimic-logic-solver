import { useStableId } from "@/hooks/useStableId";
import clsx from "clsx";
import React, { ComponentPropsWithRef, cloneElement } from "react";
import { forwardRef } from "react";

interface FormFieldProps extends ComponentPropsWithRef<"div"> {
  label: string;
  children: React.ReactElement;
  className?: string;
}

/**
 *  Wraps an input element (input, select) and provides it with the specified label.
 *  Automatically sets IDs and associated aria attributes. Handles the styling
 *  for the single field within properties drawer.
 */
const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function ChestPropertiesField(
  { children, label, className, ...additionalProps },
  ref,
) {
  const idSuffix = useStableId();
  const inputId = `chest-properties-field-${idSuffix}`;
  const labelId = `chest-properties-field-${idSuffix}-label`;

  const inputElement = cloneElement(children, {
    id: inputId,
    "aria-labelledby": labelId,
    "data-vaul-no-drag": true,
  });

  return (
    <div className={clsx("w-full", className)} ref={ref} {...additionalProps}>
      <label id={labelId} htmlFor={inputId} className="block mb-2">
        {label}
      </label>
      {inputElement}
    </div>
  );
});

export { FormField };
