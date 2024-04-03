import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@root/tailwind.config';
import { useMediaQuery } from 'usehooks-ts';
import { mapValues } from 'lodash';

const fullConfig = resolveConfig(tailwindConfig);

const breakpoints = fullConfig.theme.screens;

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
