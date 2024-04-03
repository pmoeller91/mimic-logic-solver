interface FormFieldViewProps {
  onChange: Required<JSX.IntrinsicElements['input']>['onChange'];
  onBlur: Required<JSX.IntrinsicElements['input']>['onBlur'];
  value: string;
  label: string;
  inputAttributes?: Omit<
    JSX.IntrinsicElements['input'],
    'onChange' | 'onBlur' | 'value' | 'id'
  >;
  idSuffix: string;
  error?: string;
  touched: boolean;
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
}: FormFieldViewProps) {
  const inputId = `form-field-input-${idSuffix}`;
  const errorId = `form-field-error-${idSuffix}`;
  return (
    <div>
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
          {...inputAttributes}
        />
      </div>
      <div>
        {touched && error && (
          <span id={errorId} className="text-red-500">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}

export { FormFieldView };
export type { FormFieldViewProps };
