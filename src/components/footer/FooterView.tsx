import React from 'react';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';

interface FooterViewProps {
  copyrightNotice: string;
  sourceCode: React.ReactNode;
}

function FooterView({ copyrightNotice, sourceCode }: FooterViewProps) {
  return (
    <footer className="font-sans flex flex-row flex-wrap items-center justify-center gap-4 py-2">
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
