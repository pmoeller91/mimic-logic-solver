// Usually used as a helper to quickly get the type of an event handler for a
// built-in element to help type memoized functions
type DefinedAttribute<
  T extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[T],
> = Exclude<JSX.IntrinsicElements[T][K], undefined>;

export type { DefinedAttribute };
