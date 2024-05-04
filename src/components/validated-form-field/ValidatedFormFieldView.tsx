import clsx from "clsx";
import { ValidatedFormFieldLabel } from "./ValidatedFormFieldLabel";
import { ComponentPropsWithoutRef } from "react";

interface ValidatedFormFieldViewProps {
  onChange: Required<JSX.IntrinsicElements["input"]>["onChange"];
  onBlur: Required<JSX.IntrinsicElements["input"]>["onBlur"];
  value: string;
  label: string;
  inputAttributes?: Omit<
    ComponentPropsWithoutRef<"input">,
    "onChange" | "onBlur" | "value" | "id"
  > &
    Record<string, unknown>;
  idSuffix: string;
  error?: string;
  touched: boolean;
  className?: string;
  optional?: boolean;
}

function ValidatedFormFieldView({
  onChange,
  onBlur,
  value,
  label,
  inputAttributes,
  idSuffix,
  error,
  touched,
  className,
  optional,
}: ValidatedFormFieldViewProps) {
  const inputId = `form-field-input-${idSuffix}`;
  const errorId = `form-field-error-${idSuffix}`;
  return (
    <div className={className}>
      <div className="flex flex-row items-center gap-4">
        <label htmlFor={inputId} className="mr-auto">
          <ValidatedFormFieldLabel label={label} optional={optional} />
        </label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...inputAttributes}
          className={clsx("w-12 text-right font-mono", inputAttributes?.className)}
        />
      </div>
      <div>
        {touched && error && (
          <p id={errorId} className="text-red-500 mt-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export { ValidatedFormFieldView };
export type { ValidatedFormFieldViewProps };
