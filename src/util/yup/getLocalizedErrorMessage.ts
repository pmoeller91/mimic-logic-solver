import { TFunction } from 'i18next';
import { ValidationError } from 'yup';
import { LocalizedValidationError } from '../LocalizedValidationError';

function getLocalizedErrorMessage(e: unknown, t: TFunction): string {
  if (!(e instanceof ValidationError)) {
    return t('yum.unknown');
  }
  const primaryError = e.errors[0] as unknown;
  if (typeof primaryError === 'string') {
    return primaryError;
  }
  if (primaryError instanceof LocalizedValidationError) {
    return t(...primaryError.tParams);
  }
  return t('yum.unknown');
}

export { getLocalizedErrorMessage };
