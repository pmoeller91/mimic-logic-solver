import { ValidatedFormFieldView, ValidatedFormFieldViewProps } from "./ValidatedFormFieldView";
import { useAtom } from "jotai";
import { useCallback } from "use-memo-one";
import { FormValueAtom } from "@/util/formValueAtom";
import { useStableId } from "@/hooks/useStableId";
import { ComponentProps, useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedErrorMessage } from "@/util/yup/getLocalizedErrorMessage";

interface ValidatedFormFieldContainerProps<T> {
  formValueAtom: FormValueAtom<T>;
  inputAttributes?: ValidatedFormFieldViewProps["inputAttributes"];
  label: string;
  className?: string;
  optional?: boolean;
}

function ValidatedFormFieldContainer<T>({
  formValueAtom,
  label,
  inputAttributes,
  className,
  optional,
}: ValidatedFormFieldContainerProps<T>) {
  const [{ isDirty, validateImmediate, value, error, isValid }, setFormValue] =
    useAtom(formValueAtom);
  const [touched, setTouched] = useState(false);

  const { t } = useTranslation();

  const handleOnChange = useCallback<ComponentProps<typeof ValidatedFormFieldView>["onChange"]>(
    (e) => {
      setFormValue(e.target.value);
    },
    [setFormValue],
  );

  const handleOnBlur = useCallback<ComponentProps<typeof ValidatedFormFieldView>["onBlur"]>(() => {
    setTouched(true);
    validateImmediate();
  }, [validateImmediate]);

  const idSuffix = useStableId();

  const localizedError = isValid ? undefined : getLocalizedErrorMessage(error, t);

  return (
    <ValidatedFormFieldView
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      label={label}
      inputAttributes={inputAttributes}
      idSuffix={idSuffix}
      touched={touched || isDirty}
      error={localizedError}
      className={className}
      optional={optional}
    />
  );
}

export { ValidatedFormFieldContainer };
export type { ValidatedFormFieldContainerProps };
