import { Chest } from '@/types/chest';
import { atom } from 'jotai';
import { initialState } from './initialState';

type AllChests = [
  [Chest, Chest, Chest],
  [Chest, Chest, Chest],
  [Chest, Chest, Chest]
];

const allChestsAtom = atom<AllChests>(initialState.allChests);

const allChestsCallbackAtom = atom(
  (get) => get(allChestsAtom),
  (get, set, callback: (allChests: AllChests) => AllChests) => {
    const currentAllChests = get(allChestsAtom);
    set(allChestsAtom, callback(currentAllChests));
  }
);

export { allChestsAtom, allChestsCallbackAtom };
export type { AllChests };
