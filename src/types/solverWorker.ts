import { OutboundSolverMessage, SolverMessage } from "./solverMessage";

interface SolverWorker extends Worker {
  onmessage: ((this: SolverWorker, ev: MessageEvent<SolverMessage>) => void) | null;
  postMessage(message: OutboundSolverMessage, transfer: Transferable[]): void;
  postMessage(message: OutboundSolverMessage, options?: StructuredSerializeOptions): void;
}

export type { SolverWorker };
