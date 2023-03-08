import './App.css';
import ThemeProvider from '../Themes';
import PublicRoutes from '../Routes/PublicRoutes';
import PrivateRoutes from '../Routes/PrivateRoutes';
import ScrollToTop from '../Components/Scrolls/ScrollToTop';
import { ColorModeProvider } from '../Context/ColorModeContext';

function App() {
  return (
    <>
      <ColorModeProvider>
        <ThemeProvider>
          <ScrollToTop>
            {/* <PrivateRoutes /> */}
            <PublicRoutes />
          </ScrollToTop>
        </ThemeProvider>
      </ColorModeProvider>
    </>
  );
}

export default App;