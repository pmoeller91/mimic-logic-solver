import { forwardRef } from 'react';
import { SolveButtonView } from './SolveButtonView';
import { useAtomValue } from 'jotai';
import { isSolvingAtom } from '@/atoms/solver/isSolvingAtom';
import { useCallback } from 'use-memo-one';
import { solve } from '@/solver-bridge/solverBridge';
import { derivedChestGridAtom } from '@/atoms/derivedChestGridAtom';
import { gameInfoAtom } from '@/atoms/gameInfoAtom';
import { DefinedAttribute } from '@/types/definedAttribute';

interface SolveButtonContainerProps {
  className?: string;
}

const SolveButtonContainer = forwardRef<
  HTMLButtonElement,
  SolveButtonContainerProps
>(function SolveButtonContainer({ className }, ref) {
  const grid = useAtomValue(derivedChestGridAtom);
  const gameInfo = useAtomValue(gameInfoAtom);

  const isSolving = useAtomValue(isSolvingAtom);
  const handleOnClick: DefinedAttribute<'button', 'onClick'> =
    useCallback(() => {
      solve({ grid, gameInfo });
    }, [grid, gameInfo]);

  return (
    <SolveButtonView
      label="Solve"
      className={className}
      ref={ref}
      isDisabled={isSolving}
      onClick={handleOnClick}
    />
  );
});

export { SolveButtonContainer };
