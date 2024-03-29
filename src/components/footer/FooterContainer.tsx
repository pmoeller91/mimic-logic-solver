import { Trans, useTranslation } from 'react-i18next';
import { FooterView } from './FooterView';
import * as packageJson from '@root/package.json';

function FooterContainer() {
  const { t } = useTranslation();
  const sourceLink = packageJson.repository.url;
  const sourceCode = (
    <Trans
      i18nKey="footer.sourceCode"
      components={{
        sourceLink: <a href={sourceLink} rel="noreferrer" target="_blank"></a>,
      }}
    />
  );
  const copyrightNotice = t('footer.copyrightNotice');
  return (
    <FooterView sourceCode={sourceCode} copyrightNotice={copyrightNotice} />
  );
}

export { FooterContainer };
