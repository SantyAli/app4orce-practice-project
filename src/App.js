import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function App() {
  //   const { t, i18n } = useTranslation();
  //   const changeLanguageHandler = (e) => {
  //     const languageValue = e.target.value;
  //     i18n.changeLanguage(languageValue);
  //   };
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
