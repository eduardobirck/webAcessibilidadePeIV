import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;
