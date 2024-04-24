import { atom } from 'jotai';

const selectedChestLocationAtom = atom<[0 | 1 | 2, 0 | 1 | 2]>([0, 0]);

export { selectedChestLocationAtom };
