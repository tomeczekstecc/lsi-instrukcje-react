import React,{Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Menu from './components/partials/Menu/Menu';
import Pdfs from './components/pages/Pdfs';
import Films from './components/pages/Films';
import Archive from './components/pages/Archive';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import P404 from './components/pages/P404';

function App() {
  return (
    <Fragment>
      <Router>
        <Menu />
        <div id='main-container'>
          <Routes>
            <Route path='/' element={<Pdfs/>} />
            <Route path='/*' element={<P404/>} />
            <Route path='films' element={<Films/>} />
            <Route path='about' element={<About/>} />
            <Route path='archive' element={<Archive/>} />
            <Route path='contact' element={<Contact/>} />
          </Routes></div>
      </Router>
    </Fragment>
  );
}

export default App;
