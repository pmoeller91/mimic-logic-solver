import { formValueAtom } from "@/util/formValueAtom";
import { initialState } from "./initialState";
import { localizedYup } from "@/i18n";
import { selectAtom } from "jotai/utils";

const initialValue = initialState.gameInfo.numGear;
const initialFormValue = initialValue?.toString() ?? "";

const numGearSchema = localizedYup
  .number()
  .transform((value, originalValue) => {
    if (originalValue === "") {
      return undefined;
    }
    return value as number;
  })
  .min(0)
  .integer()
  .max(9)
  .optional();

const numGearFormValueAtom = formValueAtom({
  initialValue,
  initialFormValue,
  schema: numGearSchema,
});

const numGearAtom = selectAtom(numGearFormValueAtom, (v) => v.lastValidValue);

export { numGearFormValueAtom, numGearAtom };
