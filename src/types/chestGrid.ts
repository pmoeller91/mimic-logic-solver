import { Chest } from "./chest";

interface ChestGridFour {
  numChests: 4;
  rows: [[Chest, Chest], [Chest, Chest]];
}

interface ChestGridSix {
  numChests: 6;
  rows: [[Chest, Chest, Chest], [Chest, Chest, Chest]];
}

interface ChestGridSeven {
  numChests: 7;
  rows: [[Chest, Chest], [Chest, Chest, Chest], [Chest, Chest]];
}

interface ChestGridNine {
  numChests: 9;
  rows: [[Chest, Chest, Chest], [Chest, Chest, Chest], [Chest, Chest, Chest]];
}

type ChestGrid = ChestGridFour | ChestGridSix | ChestGridSeven | ChestGridNine;

type ValidGridSizes = ChestGrid["numChests"];

type ChestGridSized<T extends ValidGridSizes> = T extends 4
  ? ChestGridFour
  : T extends 6
    ? ChestGridSix
    : T extends 7
      ? ChestGridSeven
      : T extends 9
        ? ChestGridNine
        : never;

export type {
  ChestGrid,
  ChestGridFour,
  ChestGridSix,
  ChestGridSeven,
  ChestGridNine,
  ValidGridSizes,
  ChestGridSized,
};
