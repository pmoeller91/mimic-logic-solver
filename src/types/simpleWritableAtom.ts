import { SetStateAction, WritableAtom } from 'jotai';

type SimpleWritableAtom<T> = WritableAtom<T, [SetStateAction<T>], void>;

export type { SimpleWritableAtom };
