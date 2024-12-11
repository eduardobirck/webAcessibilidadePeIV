import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Forum from './pages/Forum';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Forum' element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;
