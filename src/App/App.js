import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from '../Modules/Home/Home';
import { MainCart } from '../Modules/MainCartDelivery/MainCart';
import { Single } from '../Modules/ProductSingle/Single';

function App() {
  return (  
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Single' element={<Single />} />
        <Route path='/MainCart' element={<MainCart />} />
      </Routes>
    </> 
  );
}

export default App;
