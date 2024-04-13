import { isSolvingAtom } from '@/atoms/solver/isSolvingAtom';
import { progressAtom } from '@/atoms/solver/progressAtom';
import { solutionAtom } from '@/atoms/solver/solutionAtom';
import { useAtomValue } from 'jotai';

interface SolutionPanelProps {
  className?: string;
}

function SolutionPanel({ className }: SolutionPanelProps) {
  const solution = useAtomValue(solutionAtom);
  const progress = useAtomValue(progressAtom);
  const isSolving = useAtomValue(isSolvingAtom);
  let message = 'No message';
  if (isSolving) {
    message = `Solving, progress: ${(progress * 100).toFixed(2)}%`;
  } else if (solution) {
    message = solution.message;
  }
  return <div className={className}>{message}</div>;
}

export { SolutionPanel };
