import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/common/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Books from './pages/Books';


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          
          <Route path="books" element={<Books />}/>
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
