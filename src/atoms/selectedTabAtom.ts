import { MAIN_TAB, MainTab } from "@/types/mainTab";
import { atom } from "jotai";

const selectedTabAtom = atom<MainTab>(MAIN_TAB.gameField);

export { selectedTabAtom };
