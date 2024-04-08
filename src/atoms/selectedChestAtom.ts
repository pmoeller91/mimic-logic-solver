import { atom } from 'jotai';

const selectedChestAtom = atom<[row: 0 | 1 | 2, col: 0 | 1 | 2]>([0, 0]);

export { selectedChestAtom };
