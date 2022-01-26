import React, { useEffect, useState } from 'react';
import axios from '../api';

import BookList from '../components/bookList/BookList';

const BooksContainer = () => {
  const [list, setList] = useState([]);
  const [filterd, setFilterd] = useState([]);

  const getBooks = async (query) => {
    await axios.get(`book?query=${query}&size=${30}&page=${1}`)
    .then(res => {
      console.log(res)
      setList(res.data.documents)
      setFilterd(res.data.documents)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getBooks("미움받을 용기")
  }, [])


  return (
    <div>
      {/* <Filters /> */}
      <BookList list={filterd} />
    </div>
  )
};

export default BooksContainer;
