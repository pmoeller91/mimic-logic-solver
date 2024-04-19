import { atom } from 'jotai';

const selectedChestAtom = atom<[0 | 1 | 2, 0 | 1 | 2]>([0, 0]);

export { selectedChestAtom };
