import React, { useCallback, useEffect, useState } from 'react';
import axios from '../api';

import BookList from '../components/bookList/BookList';
import Filter from '../components/filter';
import useFilter from '../hooks/useFilter';

const BooksContainer = () => {
  const [list, setList] = useState([]);
  const [filterd, setFilterd] = useState([]);

  const getBooks = async (query) => {
    try {
      await axios.get(`book?query=${query}&size=${30}&page=${1}`)
      .then(res => {          
        setList(res.data.documents);
      })
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setFilterd([...list]);
  }, [list])

  const setAuthorsState = (list) => {
    let newArr = [];
    list.forEach((item) => {
      newArr = newArr.concat(item.authors);
    });
    const newAuthors = new Set(newArr);
    return [...newAuthors].map(author => ({ name: author, check: false }))
  }

  return (
    <div>
      <Filter 
        getBooks={getBooks}
        setFilterd={setFilterd}
        setAuthorsState={setAuthorsState}
        list={list}
      />
      <BookList list={filterd} />
    </div>
  )
};

export default BooksContainer;
