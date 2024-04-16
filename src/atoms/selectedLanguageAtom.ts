import { supportedLngs } from '@/locale/supportedLngs';
import { atom } from 'jotai';

const selectedLanguageAtom = atom<string>(supportedLngs[0]);

export { selectedLanguageAtom };
