import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import SearchMore from './pages/SearchMore';
import SearchDetail from './pages/SearchDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />

          <Route path="search" element={<Search />}>
            <Route index element={<div>이러면 모가나오는데?</div>} />
            <Route path=":keyword" element={<SearchDetail />} />
            <Route path="more" element={<SearchMore />} />
            
          </Route>
            
          <Route path="anything/*" element={<div>암거나 떠라 모르겟다.</div>}/>
            
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
