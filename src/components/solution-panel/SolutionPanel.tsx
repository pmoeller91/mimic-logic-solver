import clsx from "clsx";
import { SolutionErrors } from "./SolutionErrors";
import { SolutionDisplay } from "./SolutionDisplay";

interface SolutionPanelProps {
  className?: string;
}

function SolutionPanel({ className }: SolutionPanelProps) {
  return (
    <div className={clsx("flex flex-col flex-grow", className)}>
      <SolutionErrors />
      <SolutionDisplay />
    </div>
  );
}

export { SolutionPanel };
