import React, { useEffect, useState } from 'react';
import axios from '../api';
import useGetBook from '../hooks/useGetBook';

import BookList from '../components/bookList/BookList';
import Filter from '../components/filter';

const BooksContainer = () => {
  const [list, isFetch, filterd, getBooks, authors, adaptFilter, handleCheck, checkedAuthors, setAuthors] = useGetBook();
  return (
    <div>
      <Filter isFetch={isFetch} getBooks={getBooks} authors={authors} adaptFilter={adaptFilter} handleCheck={handleCheck} checkedAuthors={checkedAuthors} setAuthors={setAuthors}/>
      <BookList list={filterd} />
    </div>
  )
};

export default BooksContainer;
