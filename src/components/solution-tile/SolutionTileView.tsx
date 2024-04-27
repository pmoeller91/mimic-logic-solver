import React, { forwardRef } from "react";
import { ChestIcon } from "../ChestIcon";
import { ChestColor } from "@/types/chestColor";
import clsx from "clsx";

interface SolutionTileViewProps {
  contextLabel?: string;
  chestColor: ChestColor;
  className?: string;
  solutions: string[][];
  iconAltText: string;
  possibleMimic: boolean;
  chestHint: string;
}

const SolutionTileView = forwardRef<HTMLDivElement, SolutionTileViewProps>(
  function SolutionTileView(
    { className, contextLabel, chestColor, iconAltText, chestHint, solutions, possibleMimic },
    ref,
  ) {
    return (
      <div className={className} ref={ref}>
        <div
          className={clsx(
            "flex flex-col gap-4 p-4 items-center justify-between rounded-xl h-full w-full",
            possibleMimic ? "bg-red-700/60" : "bg-bg-light/60",
          )}
        >
          <div className="sr-only">{contextLabel}</div>
          <div className="text-center my-auto">{chestHint}</div>
          <div className="w-24 h-24 p-2 relative">
            <ChestIcon
              chestColor={chestColor}
              className="pointer-events-none"
              alt={iconAltText}
              aria-hidden="true"
            />
          </div>
          <dl className="w-full grid grid-cols-2 grid-rows-3 px-4">
            {solutions.slice(0, 3).map(([content, percent], i) => (
              <React.Fragment key={`solution-${i}`}>
                <dt className="text-start">{content}</dt>
                <dd className="text-end">{percent}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    );
  },
);

export { SolutionTileView };
