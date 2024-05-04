import { ChestContents } from "@/types/chestContents";
import { isEqual } from "lodash-es";

const contentKeys: ChestContents[][] = [];

/**
 * Returns an array to be used as the key for a map, for any given combination
 * of contents. Guarantees that the returned key will be the same each time,
 * allowing for re-use. Basically allowing to key by an array of contents easily.
 */
const getContentsKey = (contents: ChestContents[]) => {
  const sortedContents = [...contents].sort();
  const foundKey = contentKeys.find((contentKey) => isEqual(contentKey, sortedContents));
  if (!foundKey) {
    contentKeys.push(sortedContents);
    return sortedContents;
  }
  return foundKey;
};

export { getContentsKey };
