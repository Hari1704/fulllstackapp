

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Happy from './pages/Happy';
import Sad from './pages/Sad';
import Life from './pages/Life';
import Inspirational from './pages/Inspirational';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path = "/Happy" element={<Happy />}/>
        <Route path = "/Sad" element={<Sad />}/>
         <Route path = "/Life" element={<Life />}/>
          <Route path = "/Inspirational" element={<Inspirational />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
