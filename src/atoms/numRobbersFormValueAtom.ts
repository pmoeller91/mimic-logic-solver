import { formValueAtom } from "@/util/formValueAtom";
import { initialState } from "./initialState";
import { localizedYup } from "@/i18n";
import { selectAtom } from "jotai/utils";

const initialValue = initialState.gameInfo.numRobbers;
const initialFormValue = initialValue.toString();

const numRobbersSchema = localizedYup
  .number()
  .transform((value, originalValue) => {
    if (originalValue === "") {
      return undefined;
    }
    return value as number;
  })
  .positive()
  .integer()
  .max(9)
  .required();

const numRobbersFormValueAtom = formValueAtom({
  initialValue,
  initialFormValue,
  schema: numRobbersSchema,
});

const numRobbersAtom = selectAtom(numRobbersFormValueAtom, (v) => v.lastValidValue);

export { numRobbersFormValueAtom, numRobbersAtom };
