import * as Yup from "yup";
import { LocalizedValidationError } from "../LocalizedValidationError";

interface YupLocaleConfigConstraint {
  [k: string]: YupLocaleConfigConstraint | ((...args: any) => LocalizedValidationError); // eslint-disable-line @typescript-eslint/no-explicit-any
}

Yup.setLocale({
  mixed: {
    notType: ({ type }) => {
      if (typeof type === "string") {
        return new LocalizedValidationError("Invalid type", [
          "yup.mixed.notType",
          { context: type },
        ]);
      }
      return new LocalizedValidationError("Invalid type", ["yup.mixed.notType"]);
    },
    required: () => new LocalizedValidationError("Field required", ["yup.mixed.required"]),
  },
  number: {
    positive: () =>
      new LocalizedValidationError("Number must be positive", ["yup.number.positive"]),
    max: ({ max }) =>
      new LocalizedValidationError(`Number must be less than ${max}`, ["yup.number.max", { max }]),
    min: ({ min }) =>
      new LocalizedValidationError(`Number must be more than ${min}`, ["yup.number.min", { min }]),
    integer: () =>
      new LocalizedValidationError("Number must be an integer", ["yup.number.integer"]),
  },
} satisfies Yup.LocaleObject & YupLocaleConfigConstraint);

export { Yup as localizedYup };
