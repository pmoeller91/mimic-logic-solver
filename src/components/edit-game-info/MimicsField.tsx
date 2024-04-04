import { numMimicsFormValueAtom } from "@/atoms/numMimicsFormValueAtom";
import { FormFieldContainer } from "../form-field/FormFieldContainer";
import { useTranslation } from "react-i18next";

interface MimicsFieldProps {
  className?: string;
}

function MimicsField({ className }: MimicsFieldProps) {
  const { t } = useTranslation();
  const label = t('editGameInfo.mimicsLabel');
  return (
    <FormFieldContainer
      className={className}
      formValueAtom={numMimicsFormValueAtom}
      label={label}
      inputAttributes={{ 'data-vaul-no-drag': true }}
    />
  );
}

export { MimicsField };
