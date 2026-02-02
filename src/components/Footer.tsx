import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = String(new Date().getFullYear());
  const text = t('footer_copyright').replace('{year}', year);

  return (
    <footer className="footer">
      <div className="container">
        <small>{text}</small>
      </div>
    </footer>
  );
}
