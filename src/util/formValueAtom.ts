import { Setter, atom } from 'jotai';
import { atomWithValidate } from 'jotai-form';
import { debounce } from 'lodash-es';
import { Schema } from 'yup';

interface FormValueAtomParams<T, S extends Schema<T>> {
  initialValue: T;
  initialFormValue: string;
  schema: S;
}

function formValueAtom<T, S extends Schema<T>>({
  initialValue,
  initialFormValue,
  schema,
}: FormValueAtomParams<T, S>) {
  const lastValidValueAtom = atom(initialValue);
  const formValueAtom = atom(initialFormValue);
  const validateAtom = atomWithValidate<{
    value: string;
    setLastValidValue: (value: T) => void;
  }>(
    {
      value: initialFormValue,
      setLastValidValue: () => {
        return;
      },
    },
    {
      validate: async (state) => {
        const validatedValue = await schema.validate(state.value);
        state.setLastValidValue(validatedValue);
        return state;
      },
    }
  );

  const debouncedSetValidateAtomAtom = atom({
    debouncedSetValidateAtom: debounce((set: Setter, value: string) => {
      const setLastValidValue = (validValue: T) =>
        set(lastValidValueAtom, validValue);
      set(validateAtom, { value, setLastValidValue });
    }, 250),
  });

  return atom(
    (get) => {
      const formValue = get(formValueAtom);
      const validationParams = get(validateAtom);
      const lastValidValue = get(lastValidValueAtom);
      const { debouncedSetValidateAtom } = get(debouncedSetValidateAtomAtom);

      const { isDirty, isValidating } = validationParams;
      let isValid = false;
      let error: unknown = undefined;

      if (!validationParams.isValidating) {
        isValid = validationParams.isValid;
        if (!validationParams.isValid) {
          error = validationParams.error;
        }
      }

      return {
        value: formValue,
        lastValidValue,
        validateImmediate: () => debouncedSetValidateAtom?.flush(),
        isDirty,
        isValidating,
        isValid,
        error,
      };
    },
    (get, set, value: string) => {
      set(formValueAtom, value);
      const { debouncedSetValidateAtom } = get(debouncedSetValidateAtomAtom);
      debouncedSetValidateAtom(set, value);
    }
  );
}

type FormValueAtom<T, S extends Schema<T> = Schema<T>> = ReturnType<
  typeof formValueAtom<T, S>
>;

export { formValueAtom };
export type { FormValueAtom };
