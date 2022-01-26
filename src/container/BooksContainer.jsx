import React, { useEffect, useState } from 'react';
import axios from '../api';
import useGetBook from '../hooks/useGetBook';

import BookList from '../components/bookList/BookList';
import Filter from '../components/filter';

const BooksContainer = () => {
  const [list, isFetch, filterd, getBooks, authors] = useGetBook();
  return (
    <div>
      <Filter isFetch={isFetch} getBooks={getBooks} authors={authors}/>
      <BookList list={filterd} />
    </div>
  )
};

export default BooksContainer;
