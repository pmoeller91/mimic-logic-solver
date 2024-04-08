import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '../ChestIcon';
import { useStableId } from '@/hooks/useStableId';
import clsx from 'clsx';

interface MiniChestIconProps {
  chestColor: ChestColor;
  className?: string;
  onClick: () => void;
  isSelected?: boolean;
  ariaLabel: string;
}

function MiniChestSelectIcon({
  chestColor,
  className,
  ariaLabel,
  isSelected,
  onClick,
}: MiniChestIconProps) {
  const idSuffix = useStableId();
  const inputId = `chest-selector-${idSuffix}`;
  return (
    <div className={clsx('relative h-16 w-16 m-2 group', className)}>
      <input
        type="radio"
        checked={isSelected}
        onChange={onClick}
        className="opacity-0 absolute top-0 left-0 h-full w-full m-0 cursor-pointer"
        id={inputId}
      />
      <div className="flex flex-col gap-2 items-center justify-center h-full w-full border-2 border-c rounded-md p-0 transition-transform group-has-[:checked]:bg-c group-has-[:checked]:scale-105 group-has-[:focus]:border-cll group-has-[:focus]:border-4">
        <div aria-hidden="true">
          <ChestIcon chestColor={chestColor} className="p-2" />
        </div>
      </div>
      <label htmlFor={inputId} className="sr-only">
        {ariaLabel}
      </label>
    </div>
  );
}

export { MiniChestSelectIcon };
