import { GameMode } from '@/types/gameMode';
import { atom } from 'jotai';
import { initialState } from './initialState';

const gameModeAtom = atom<GameMode>(initialState.gameInfo.gameMode);

export { gameModeAtom };
