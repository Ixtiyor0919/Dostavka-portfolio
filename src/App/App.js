import './App.css';
import { Suspense } from 'react';
import ThemeProvider from '../Themes';
import PublicRoutes from '../Routes/PublicRoutes';
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from '../Routes/PrivateRoutes';
import { Loader } from '../Components/Loader/Loader';
import { Register } from '../Pages/Register/Register';
import ScrollToTop from '../Components/Scrolls/ScrollToTop';
import { Tekshirish } from '../Modules/Tekshirish/Tekshirish';
import { ColorModeProvider } from '../Context/ColorModeContext';

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ColorModeProvider>
          <ThemeProvider>
              <Tekshirish>
                <ScrollToTop>
                  {/* <PrivateRoutes /> */}
                  <PublicRoutes />
                </ScrollToTop>
              </Tekshirish>
                <Routes>
                  <Route path="/register" element={<Register />} />
                </Routes>
          </ThemeProvider>
        </ColorModeProvider>
      </Suspense>
    </>
  );
}

export default App;