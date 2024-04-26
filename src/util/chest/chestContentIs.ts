import { Chest } from '@/types/chest';
import { ChestContents } from '@/types/chestContents';

interface ChestContentIsParams {
  chest: Chest;
  contents: ChestContents;
}

const chestContentIs = ({ chest, contents }: ChestContentIsParams): boolean => {
  if (typeof chest.contents === 'string') {
    return chest.contents === contents;
  } else if (Array.isArray(chest.contents)) {
    return chest.contents.every((content) => content === contents);
  }
  return false;
};

export { chestContentIs };
