import { Chest } from '@/types/chest';
import { ChestContents } from '@/types/chestProperties';

interface ChestContentIncludesParams {
  chest: Chest;
  contents: ChestContents;
}

const chestContentIncludes = ({
  chest,
  contents,
}: ChestContentIncludesParams): boolean => {
  if (typeof chest.contents === 'string') {
    return chest.contents === contents;
  } else if (Array.isArray(chest.contents)) {
    return chest.contents.includes(contents);
  }
  return false;
};

export { chestContentIncludes };
