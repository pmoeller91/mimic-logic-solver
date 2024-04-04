import { FormFieldView, FormFieldViewProps } from './FormFieldView';
import { useAtom } from 'jotai';
import { useCallback } from 'use-memo-one';
import { ComponentProps } from '@/types/componentProps';
import { FormValueAtom } from '@/util/formValueAtom';
import { useStableId } from '@/hooks/useStableId';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocalizedErrorMessage } from '@/util/yup/getLocalizedErrorMessage';

interface FormFieldContainerProps<T> {
  formValueAtom: FormValueAtom<T>;
  inputAttributes?: FormFieldViewProps['inputAttributes'];
  label: string;
  className?: string;
}

function FormFieldContainer<T>({
  formValueAtom,
  label,
  inputAttributes,
  className,
}: FormFieldContainerProps<T>) {
  const [{ isDirty, validateImmediate, value, error, isValid }, setFormValue] =
    useAtom(formValueAtom);
  const [touched, setTouched] = useState(false);

  const { t } = useTranslation();

  const handleOnChange = useCallback<
    ComponentProps<typeof FormFieldView>['onChange']
  >(
    (e) => {
      setFormValue(e.target.value);
    },
    [setFormValue]
  );

  const handleOnBlur = useCallback<
    ComponentProps<typeof FormFieldView>['onBlur']
  >(() => {
    setTouched(true);
    validateImmediate();
  }, [validateImmediate]);

  const idSuffix = useStableId();

  const localizedError = isValid
    ? undefined
    : getLocalizedErrorMessage(error, t);

  return (
    <FormFieldView
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      label={label}
      inputAttributes={inputAttributes}
      idSuffix={idSuffix}
      touched={touched || isDirty}
      error={localizedError}
      className={className}
    />
  );
}

export { FormFieldContainer };
