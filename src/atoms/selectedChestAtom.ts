import { ChestLocation } from '@/types/chestLocation';
import { atom } from 'jotai';

const selectedChestAtom = atom<ChestLocation>([0, 0]);

export { selectedChestAtom };
