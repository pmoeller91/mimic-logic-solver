import { SolverWorker } from "@/types/solverWorker";
import { atom } from "jotai";

const workerAtom = atom<SolverWorker | null>(null);

export { workerAtom };
