import { Trans } from 'react-i18next';

interface FormFieldLabelProps {
  label: string;
  optional?: boolean;
  className?: string;
}

function FormFieldLabel({ label, optional, className }: FormFieldLabelProps) {
  return (
    <Trans
      i18nKey="formField.label"
      values={{ label }}
      context={optional ? 'optional' : undefined}
      components={{
        secondary: <span className="italic text-cll/90 text-sm" />,
      }}
      className={className}
    />
  );
}

export { FormFieldLabel };
