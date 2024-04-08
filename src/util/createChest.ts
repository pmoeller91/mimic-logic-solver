import { pickBy } from 'lodash';
import { Chest } from '@/types/chest';
import { CHEST_COLOR } from '@/types/chestProperties';
import merge from 'deepmerge';
import { DeepReadonly, DeepWritable } from 'ts-essentials';
import { CHEST_HINT_TYPE } from '@/types/chestHint';

const defaultChest = {
  color: CHEST_COLOR.red,
  hint: { type: CHEST_HINT_TYPE.asleep, params: [] },
} as const satisfies Chest;

type DefaultChest = DeepWritable<typeof defaultChest>;

type CreateChestParams<T extends DeepReadonly<Partial<Chest>>> = {
  [K in keyof T]: T[K];
};

function createChest<T extends DeepReadonly<Partial<Chest>>>({
  color,
  contents,
  hint,
}: CreateChestParams<T>): DeepWritable<Omit<DefaultChest, keyof T> & T>;
function createChest({
  color,
  contents,
  hint,
}: DeepReadonly<Partial<Chest>>): Chest;
function createChest(): DefaultChest;
function createChest<T extends DeepReadonly<Partial<Chest>>>(
  { color, contents, hint }: CreateChestParams<T> = {} as CreateChestParams<T>
): DeepWritable<Omit<DefaultChest, keyof T> & T> {
  // Filter unprovided properties to avoid replacing defaults
  const providedValues = pickBy<CreateChestParams<T>>({
    color,
    contents,
    hint,
  } as CreateChestParams<T>);
  return merge(defaultChest, providedValues) as DeepWritable<
    Omit<DefaultChest, keyof T> & T
  >;
}

export { createChest, defaultChest };
