import { LocalizedValidationError } from "./LocalizedValidationError";

/**
 * Used to throw multiple validation errors from a single 'throw', as the validator function for the overall form can only throw a single error.
 * It's obviously nicer if we can view every error at once.
 */
class LocalizedValidationErrors extends RangeError {
  errors: LocalizedValidationError[];
  constructor(message: string, errors: LocalizedValidationError[]) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
  }
}

export { LocalizedValidationErrors };
