import {
  SOLVER_MESSAGE_TYPE,
  type OutboundSolverMessage,
  type SolverMessage,
} from '../types/solverMessage';
import { throttle } from 'lodash';

declare function postMessage(
  message: SolverMessage,
  transfer: Transferable[]
): void;
declare function postMessage(
  message: SolverMessage,
  options?: StructuredSerializeOptions
): void;

const reportProgress = (progress: number) => {
  postMessage({ type: SOLVER_MESSAGE_TYPE.progress, value: progress });
};

const throttledReportProgress = throttle(reportProgress, 50);

onmessage = function (
  this: DedicatedWorkerGlobalScope,
  _ev: MessageEvent<OutboundSolverMessage>
) {
  for (let i = 0; i < 1e9; i++) {
    if (i % 1000) {
      throttledReportProgress(i / 1e9);
    }
  }
  postMessage({
    type: SOLVER_MESSAGE_TYPE.end,
    value: { message: `${Math.random() * 100}` },
  });
};
