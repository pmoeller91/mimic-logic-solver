import { Chest } from "@/types/chest";
import { ChestContents } from "@/types/chestContents";

interface ChestExcludeContentsParams {
  chest: Chest;
  contents: ChestContents;
}

/**
 * Remove content as a possibility from a chest. Only removes the specified
 * contents if it would leave some contents in the chest, because empty chests
 * are not an accounted-for possibility currently.
 */
const chestExcludeContents = ({ chest, contents }: ChestExcludeContentsParams) => {
  if (Array.isArray(chest.contents)) {
    const filteredContents = chest.contents.filter((content) => content !== contents);
    if (filteredContents.length > 0) {
      chest.contents = filteredContents;
    }
  }
};

export { chestExcludeContents };
