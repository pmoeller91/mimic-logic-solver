import { TFunction } from "i18next";
import { atom } from "jotai";

const errorMessagesAtom = atom<Parameters<TFunction>[]>([]);

export { errorMessagesAtom };
