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
}: FormFieldViewProps) {
  const inputId = `form-field-input-${idSuffix}`;
  const errorId = `form-field-error-${idSuffix}`;
  return (
    <div className={className}>
      <div>
        <label htmlFor={inputId} className="mr-4">
          {label}
        </label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...inputAttributes}
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
