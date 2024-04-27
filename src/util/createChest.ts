import { pickBy } from "lodash-es";
import { Chest } from "@/types/chest";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { CHEST_COLOR } from "@/types/chestColor";
import merge from "deepmerge";
import { DeepReadonly, DeepWritable } from "ts-essentials";
import { CHEST_HINT_TYPE } from "@/types/chestHint";

const defaultChest = {
  color: CHEST_COLOR.red,
  hint: { type: CHEST_HINT_TYPE.selfAsleep, params: [] },
  contents: CHEST_CONTENTS.unknown,
} as const satisfies Chest;

type DefaultChest = DeepWritable<typeof defaultChest>;

type CreateChestParams<T extends DeepReadonly<Partial<Chest>>> = {
  [K in keyof T]: T[K];
};

function createChest<T extends DeepReadonly<Partial<Chest>>>({
  color,
  contents,
  hint,
  isConfused,
}: CreateChestParams<T>): DeepWritable<Omit<DefaultChest, keyof T> & T>;
function createChest({ color, contents, hint, isConfused }: DeepReadonly<Partial<Chest>>): Chest;
function createChest(): DefaultChest;
function createChest<T extends DeepReadonly<Partial<Chest>>>(
  { color, contents, hint, isConfused }: CreateChestParams<T> = {} as CreateChestParams<T>,
): DeepWritable<Omit<DefaultChest, keyof T> & T> {
  // Filter unprovided properties to avoid replacing defaults
  const providedValues = pickBy<CreateChestParams<T>>({
    color,
    contents,
    hint,
    isConfused,
  } as CreateChestParams<T>);
  return merge(defaultChest, providedValues) as DeepWritable<Omit<DefaultChest, keyof T> & T>;
}

export { createChest, defaultChest };
