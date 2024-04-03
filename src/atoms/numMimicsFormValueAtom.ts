import { formValueAtom } from "@/util/formValueAtom";
import { initialState } from "./initialState";
import { localizedYup } from "@/i18n";
import { selectAtom } from "jotai/utils";

const initialValue = initialState.gameInfo.numMimics;
const initialFormValue = initialValue.toString();

const numMimicsSchema = localizedYup.number().positive().integer().required();

const numMimicsFormValueAtom = formValueAtom({ initialValue, initialFormValue, schema: numMimicsSchema });

const numMimicsAtom = selectAtom(numMimicsFormValueAtom, (v) => v.lastValidValue);

export { numMimicsFormValueAtom, numMimicsAtom };
