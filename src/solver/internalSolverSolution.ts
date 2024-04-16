import { ChestContents } from '@/types/chestProperties';

// A full solution to a grid. Consists of an array of maps. Each entry of the
// array represents the solutions for one chest (in order of flat() ing the rows
// of the corresponding ChestGrid.) Each map contains one array key for each
// possible contents / contents combination, and one value representing how many
// valid solutions have that as the possible contents for the chest.
type InternalSolverSolution = Map<ChestContents[], number>[];

export type { InternalSolverSolution };
