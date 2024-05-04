import { useMediaQuery } from "usehooks-ts";
import { mapValues } from "lodash-es";

// Hard-coding as using resolveConfig for tailwind massively bloats bundle
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const BREAKPOINT = mapValues(breakpoints, (_value, key) => key) as {
  [K in keyof typeof breakpoints]: K;
};

type Breakpoint = keyof typeof breakpoints;

function breakpointQuery(minWidth: string) {
  return `(min-width: ${minWidth})`;
}

function useBreakpoint(breakpoint: Breakpoint): boolean {
  return useMediaQuery(breakpointQuery(breakpoints[breakpoint]));
}

export { BREAKPOINT, useBreakpoint };
export type { Breakpoint };
