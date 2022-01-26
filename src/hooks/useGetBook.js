import React, { useState, useCallback, useEffect } from "react";
import axios from '../api';

const useGetBook = () => {
  const [isFetch, setIsFetch] = useState(false);
  const [list, setList] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [authors, setAuthors] = useState(null)

  const getBooks = async (query) => {
    await axios.get(`book?query=${query}&size=${30}&page=${1}`)
    .then(res => {
      // console.log(res)
      setList(res.data.documents)
      setFilterd(res.data.documents)
      setIsFetch(true)
    })
    .catch(err => {
      console.error(err);
      setIsFetch(false);
    })
  };

  useEffect(() => {
    if(isFetch) {
      let newArr = [];
      list.forEach((item) => {
        newArr = newArr.concat(item.authors);
      });
      const newAuthors = new Set(newArr);
      setAuthors([...newAuthors]);
    }
  }, [isFetch, list])

  return [list, isFetch, filterd, getBooks, authors]
}

export default useGetBook;