import { ChestGrid } from "./chestGrid";
import { GameInfo } from "./state/gameInfo";

const SOLVER_MESSAGE_TYPE = {
  progress: 'PROGRESS',
  begin: 'BEGIN',
  end: 'END',
} as const;

type SolverMessageType =
  (typeof SOLVER_MESSAGE_TYPE)[keyof typeof SOLVER_MESSAGE_TYPE];

interface SolverMessageBase<T extends SolverMessageType, V = undefined> {
  type: T;
  value: V;
}

interface SolverSolution {
  message: string;
}

interface SolverMessages {
  ProgressMessage: SolverMessageBase<
    (typeof SOLVER_MESSAGE_TYPE)['progress'],
    number
  >;
  BeginMessage: SolverMessageBase<(typeof SOLVER_MESSAGE_TYPE)['begin']>;
  EndMessage: SolverMessageBase<
    (typeof SOLVER_MESSAGE_TYPE)['end'],
    SolverSolution
  >;
}

type SolverMessage = SolverMessages[keyof SolverMessages];

interface OutboundSolverMessage {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

export { SOLVER_MESSAGE_TYPE };
export type {
  SolverMessages,
  SolverMessage,
  SolverSolution,
  SolverMessageType,
  OutboundSolverMessage,
};
