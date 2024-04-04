import React from 'react';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';
import clsx from 'clsx';

interface FooterViewProps {
  copyrightNotice: string;
  sourceCode: React.ReactNode;
  className?: string;
}

function FooterView({
  copyrightNotice,
  sourceCode,
  className,
}: FooterViewProps) {
  return (
    <footer
      className={clsx(
        'font-sans flex flex-row flex-wrap items-center justify-center gap-4 py-2',
        className
      )}
    >
      <p>{copyrightNotice}</p>
      <div className="w-2 h-0 border-b-[1px] border-pll hidden lg:block" />
      <p>{sourceCode}</p>
      <div className="w-2 h-0 border-b-[1px] border-pll hidden lg:block" />
      <div className="min-w-48">
        <LanguageSwitcher />
      </div>
    </footer>
  );
}

export { FooterView };
