import clsx from 'clsx';
import { FormFieldLabel } from './FormFieldLabel';

interface FormFieldViewProps {
  onChange: Required<JSX.IntrinsicElements['input']>['onChange'];
  onBlur: Required<JSX.IntrinsicElements['input']>['onBlur'];
  value: string;
  label: string;
  inputAttributes?:
    | Omit<
        JSX.IntrinsicElements['input'],
        'onChange' | 'onBlur' | 'value' | 'id'
      >
    | Record<string, unknown>;
  idSuffix: string;
  error?: string;
  touched: boolean;
  className?: string;
  optional?: boolean;
}

function FormFieldView({
  onChange,
  onBlur,
  value,
  label,
  inputAttributes,
  idSuffix,
  error,
  touched,
  className,
  optional
}: FormFieldViewProps) {
  const inputId = `form-field-input-${idSuffix}`;
  const errorId = `form-field-error-${idSuffix}`;
  return (
    <div className={className}>
      <div className="flex flex-row items-center gap-4">
        <label htmlFor={inputId} className="mr-auto">
          <FormFieldLabel label={label} optional={optional} />
        </label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...inputAttributes}
          className={clsx("w-12 text-right font-mono")}
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

export { FormFieldView };
export type { FormFieldViewProps };
