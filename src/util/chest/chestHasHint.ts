import { Chest } from "@/types/chest";
import { ChestHintType } from "@/types/chestHint";
import { ChestWithHintType } from "../../solver/hint-resolvers/hintResolverTypes";

const chestHasHint = <T extends ChestHintType>(
  chest: Chest,
  hintType: T,
): chest is ChestWithHintType<T> => {
  return chest.hint.type === hintType;
};

export { chestHasHint };
