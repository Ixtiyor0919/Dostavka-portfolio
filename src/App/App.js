import '../Styles/App.css';
import React from 'react';
import Routes from '../Routes';
import ThemeProvider from '../Themes';
import {useTranslation} from "react-i18next";
import ScrollToTop from '../Components/Scrolls/ScrollToTop';
import { ColorModeProvider } from '../Context/ColorModeContext';

function App() {
  const {t} = useTranslation()

  React.useEffect(() => {
    document.title = t('app-title')
  }, [t])

  return (
    <ColorModeProvider>
      <ThemeProvider>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </ThemeProvider>
    </ColorModeProvider>
  );
};

export default App;