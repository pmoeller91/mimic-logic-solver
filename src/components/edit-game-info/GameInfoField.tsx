import {
  FormFieldContainer,
  FormFieldContainerProps,
} from '../form-field/FormFieldContainer';

interface GameInfoFieldProps<T> extends FormFieldContainerProps<T> {
  placeholder: string;
}

function GameInfoField<T>({
  className,
  formValueAtom,
  label,
  inputAttributes,
  placeholder,
  ...rest
}: GameInfoFieldProps<T>) {
  return (
    <FormFieldContainer
      className={className}
      formValueAtom={formValueAtom}
      label={label}
      inputAttributes={{
        'data-vaul-no-drag': true,
        inputMode: 'numeric',
        maxLength: 4,
        placeholder,
      }}
      {...rest}
    />
  );
}

export { GameInfoField };
