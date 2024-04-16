import type { SolverMessage } from '@/types/solverMessage';

declare global {
  declare function postMessage(
    message: SolverMessage,
    transfer: Transferable[]
  ): void;
  declare function postMessage(
    message: SolverMessage,
    options?: StructuredSerializeOptions
  ): void;
}
