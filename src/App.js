import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Lumos from './pages/Lumos';
import RQ from './pages/RQ';
import TBM from './pages/TBM';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/lumos' element={<Lumos/>}/>
      <Route path='/theblastmonkeys' element={<TBM/>}/>
      <Route path='/retroquest' element={<RQ/>}/>
      </Routes>
        
        
    </Router>

   
    </>
  );
}

export default App;
