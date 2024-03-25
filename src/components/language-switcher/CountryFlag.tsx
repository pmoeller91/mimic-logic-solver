import clsx from 'clsx';
import styles from './countryFlag.module.scss';

const defaultFlag = '🏳️';

const flags: Record<string, string> = {
  en: '🇺🇸',
  jp: '🇯🇵',
};

interface CountryFlagProps {
  langCode: string;
  className?: string;
}

function CountryFlag({ langCode, className }: CountryFlagProps) {
  const flag = flags[langCode] ?? defaultFlag;
  const classNames = clsx(styles.flag, className);
  return <span className={classNames}>{flag}</span>;
}

export { CountryFlag };
export type { CountryFlagProps };
