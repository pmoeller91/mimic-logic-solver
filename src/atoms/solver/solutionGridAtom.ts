import { ChestGrid } from '@/types/chestGrid';
import { atom } from 'jotai';

const solutionGridAtom = atom<ChestGrid | null>(null);

export { solutionGridAtom };
