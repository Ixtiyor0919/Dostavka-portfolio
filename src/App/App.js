import './App.css';
import ThemeProvider from '../Themes';
import RoutesPage from "../Routes/RoutesPage";
import ScrollToTop from '../Components/Scrolls/ScrollToTop';
import { ColorModeProvider } from '../Context/ColorModeContext';

function App() {
  return (
    <>
      <ColorModeProvider>
        <ThemeProvider>
          <ScrollToTop>
            <RoutesPage />
          </ScrollToTop>
        </ThemeProvider>
      </ColorModeProvider>
    </>
  );
}

export default App;