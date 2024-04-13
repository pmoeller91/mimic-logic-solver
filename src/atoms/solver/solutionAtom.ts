import { SolverSolution } from "@/types/solverMessage";
import { atom } from "jotai";

const solutionAtom = atom<SolverSolution | null>(null);

export { solutionAtom };
