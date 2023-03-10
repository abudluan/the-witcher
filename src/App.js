import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';

import Home from './components/Home';

import ScrollTop from './components/ScrollTop';

import SinaisHome from './components/Sinais/SinaisHome';
import Igni from './components/Sinais/Igni';
import Axii from './components/Sinais/Axii';
import Aard from './components/Sinais/Aard';
import Quen from './components/Sinais/Quen';
import Yrden from './components/Sinais/Yrden';

import EscolasHomes from './components/Escolas/EscolasHome';
import Lobo from './components/Escolas/Lobo';
import Gato from './components/Escolas/Gato';
import Grifo from './components/Escolas/Grifo';

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/SinaisHome' element={<SinaisHome />} />
        <Route exact path='/Igni' element={<Igni />} />
        <Route exact path='/Axii' element={<Axii />} />
        <Route exact path='/Aard' element={<Aard />} />
        <Route exact path='/Quen' element={<Quen />} />
        <Route exact path='/Yrden' element={<Yrden />} />
        <Route exact path='/EscolasHome' element={<EscolasHomes />} />
        <Route exact path='/Lobo' element={<Lobo />} />
        <Route exact path='/Gato' element={<Gato />} />
        <Route exact path='/Grifo' element={<Grifo />} />
      </Routes>
    </Router>
    

  );
}

export default App;
