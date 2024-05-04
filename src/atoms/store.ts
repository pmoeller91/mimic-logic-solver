import { createStore } from "jotai";

const store = createStore();

type Store = typeof store;

export { store };
export type { Store };
