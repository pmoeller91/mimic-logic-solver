import { FormFieldView, FormFieldViewProps } from './FormFieldView';
import { useAtom } from 'jotai';
import { useCallback } from 'use-memo-one';
import { ComponentProps } from '@/types/componentProps';
import { FormValueAtom } from '@/util/formValueAtom';
import { useStableId } from '@/hooks/useStableId';
import { useState } from 'react';

interface FormFieldContainerProps<T> {
  formValueAtom: FormValueAtom<T>;
  inputAttributes?: FormFieldViewProps['inputAttributes'];
  label: string;
}

function FormFieldContainer<T>({
  formValueAtom,
  label,
  inputAttributes,
}: FormFieldContainerProps<T>) {
  const [{ isDirty, validateImmediate, value }, setFormValue] =
    useAtom(formValueAtom);
  const [touched, setTouched] = useState(false);

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

  return (
    <FormFieldView
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      label={label}
      inputAttributes={inputAttributes}
      idSuffix={idSuffix}
      touched={touched || isDirty}
      error="Bad things"
    />
  );
}

export { FormFieldContainer };
