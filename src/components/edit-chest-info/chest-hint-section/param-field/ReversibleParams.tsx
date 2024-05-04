import { ReactElement, cloneElement } from "react";

interface ReversibleParamsProps {
  paramFields: [ReactElement, ReactElement];
  shouldReverse: boolean;
  // Provide the position prop (1 or 2) to elements, used to generate a
  // positional prefix for the labels to help distinguish between identical
  // parameters (for example, "Color" and "Color")
  shouldProvidePosition?: boolean;
}

/**
 * Simple helper component to present elements in normal or reversed order based
 * on a boolean. If "shouldProvidePosition" is passed, the elements are
 * additionally cloned to receive the "position" numerical prop to indicate
 * whether each element is currently first or second.
 */
function ReversibleParams({
  paramFields,
  shouldReverse,
  shouldProvidePosition,
}: ReversibleParamsProps) {
  let firstElement = shouldReverse ? paramFields[1] : paramFields[0];
  let secondElement = shouldReverse ? paramFields[0] : paramFields[1];
  if (shouldProvidePosition) {
    firstElement = cloneElement(firstElement, { position: 1 });
    secondElement = cloneElement(secondElement, { position: 2 });
  }
  return (
    <>
      {firstElement}
      {secondElement}
    </>
  );
}

export { ReversibleParams };
