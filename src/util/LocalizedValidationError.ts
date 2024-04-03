import { i18n } from '@/i18n';

type TParams = Parameters<(typeof i18n)['t']>;

/**
 * A validation error used for the forms which provides options for i18next's 't' function which can generate a localized error message.
 */
class LocalizedValidationError extends RangeError {
  tParams: TParams;
  constructor(message: string, tParams: TParams) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.tParams = tParams;
  }
}

export { LocalizedValidationError };
