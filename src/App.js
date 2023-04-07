

import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter,   Routes, Route } from 'react-router-dom';
import Layout  from './components/Layout';
function App() {
  return (
    //BEM
    // 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

