import { Trans, useTranslation } from 'react-i18next';
import { SiteFooterView } from './SiteFooterView';
import * as packageJson from '@root/package.json';

interface SiteFooterContainerProps {
  className?: string;
}

function SiteFooterContainer({ className }: SiteFooterContainerProps) {
  const { t } = useTranslation();
  const sourceLink = packageJson.repository.url;
  const sourceCode = (
    <Trans
      i18nKey="footer.sourceCode"
      components={{
        sourceLink: (
          <a
            href={sourceLink}
            rel="noreferrer noopener"
            target="_blank"
            className="light"
          ></a>
        ),
      }}
    />
  );
  const copyrightNotice = t('footer.copyrightNotice');
  return (
    <SiteFooterView
      sourceCode={sourceCode}
      copyrightNotice={copyrightNotice}
      className={className}
    />
  );
}

export { SiteFooterContainer };
