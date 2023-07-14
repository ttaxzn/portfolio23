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
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
    <Router>
      <ScrollToTop>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/lumos' element={<Lumos/>}/>
      <Route path='/theblastmonkeys' element={<TBM/>}/>
      <Route path='/retroquest' element={<RQ/>}/>
      </Routes>
      </ScrollToTop>
        
    </Router>

   
    </>
  );
}

export default App;
