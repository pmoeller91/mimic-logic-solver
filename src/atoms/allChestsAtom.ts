import { Chest } from '@/types/chest';
import { atom } from 'jotai';
import { initialState } from './initialState';

type AllChests = [
  Chest,
  Chest,
  Chest,
  Chest,
  Chest,
  Chest,
  Chest,
  Chest,
  Chest
];

const allChestsAtom = atom<AllChests>(initialState.allChests);

export { allChestsAtom };
export type { AllChests };
