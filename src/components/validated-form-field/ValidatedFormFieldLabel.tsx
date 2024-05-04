import { Trans } from "react-i18next";

interface ValidatedFormFieldLabelProps {
  label: string;
  optional?: boolean;
  className?: string;
}

function ValidatedFormFieldLabel({ label, optional, className }: ValidatedFormFieldLabelProps) {
  return (
    <Trans
      i18nKey="formField.label"
      values={{ label }}
      context={optional ? "optional" : undefined}
      components={{
        secondary: <span className="italic text-cll/90 text-sm" />,
      }}
      className={className}
    />
  );
}

export { ValidatedFormFieldLabel };
