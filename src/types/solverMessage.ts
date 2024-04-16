import { TFunction } from 'i18next';
import { ChestGrid } from './chestGrid';
import { GameInfo } from './state/gameInfo';
import { ChestContents } from './chestProperties';

const SOLVER_MESSAGE_TYPE = {
  // Currently unused due to completing too quickly.
  progress: 'PROGRESS',
  begin: 'BEGIN',
  error: 'ERROR',
  end: 'END',
} as const;

type SolverMessageType =
  (typeof SOLVER_MESSAGE_TYPE)[keyof typeof SOLVER_MESSAGE_TYPE];

interface SolverMessageBase<T extends SolverMessageType, V = undefined> {
  type: T;
  value: V;
}

type SolverSolution = [ChestContents[], number][][];

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
  ErrorMessage: SolverMessageBase<
    (typeof SOLVER_MESSAGE_TYPE)['error'],
    Parameters<TFunction>[]
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
