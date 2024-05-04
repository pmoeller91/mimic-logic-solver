import { formValueAtom } from "@/util/formValueAtom";
import { initialState } from "./initialState";
import { localizedYup } from "@/i18n";
import { selectAtom } from "jotai/utils";

const initialValue = initialState.gameInfo.numItems;
const initialFormValue = initialValue?.toString() ?? "";

const numItemsSchema = localizedYup
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

const numItemsFormValueAtom = formValueAtom({
  initialValue,
  initialFormValue,
  schema: numItemsSchema,
});

const numItemsAtom = selectAtom(numItemsFormValueAtom, (v) => v.lastValidValue);

export { numItemsFormValueAtom, numItemsAtom };
