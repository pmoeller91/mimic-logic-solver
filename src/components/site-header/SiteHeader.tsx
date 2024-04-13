import { forwardRef } from 'react';
import { ChestIcon } from '../ChestIcon';
import { CHEST_COLOR } from '@/types/chestProperties';

interface SiteHeaderProps {
  className?: string;
}

const SiteHeader = forwardRef<HTMLDivElement, SiteHeaderProps>(
  function SiteHeaderView({ className }, ref) {
    return (
      <header className={className} ref={ref}>
        <div className="px-8 py-2 bg-bg-dark-primary flex flex-row items-center">
          <ChestIcon
            chestColor={CHEST_COLOR.red}
            className="h-6 w-6 sm:h-8 sm:w-8 inline-block mr-4"
            role="presentation"
          />
          <h1 className="text-base sm:text-xl md:text-3xl">
            Mimic Logic Solver
          </h1>
        </div>
      </header>
    );
  }
);

export { SiteHeader };
