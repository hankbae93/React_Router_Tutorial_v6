import React from 'react';
import { Outlet } from 'react-router-dom';

const Search = () => {
  return (
    <>
    <div>
      <h2>검색페이지</h2>
      <input />
    </div>

    <Outlet />
    </>
  )
};

export default Search;
