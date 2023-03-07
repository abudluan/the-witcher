import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';

import Home from './components/Home';
import SinaisHome from './components/Sinais/SinaisHome';
import EscolasHomes from './components/Escolas/EscolasHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/SinaisHome' element={<SinaisHome />} />
        <Route exact path='/EscolasHome' element={<EscolasHomes />} />
      </Routes>
    </Router>
    

  );
}

export default App;
