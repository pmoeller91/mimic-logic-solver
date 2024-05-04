import { formValueAtom } from "@/util/formValueAtom";
import { initialState } from "./initialState";
import { localizedYup } from "@/i18n";
import { selectAtom } from "jotai/utils";

const initialValue = initialState.gameInfo.numGold;
const initialFormValue = initialValue?.toString() ?? "";

const numGoldSchema = localizedYup
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

const numGoldFormValueAtom = formValueAtom({
  initialValue,
  initialFormValue,
  schema: numGoldSchema,
});

const numGoldAtom = selectAtom(numGoldFormValueAtom, (v) => v.lastValidValue);

export { numGoldFormValueAtom, numGoldAtom };
