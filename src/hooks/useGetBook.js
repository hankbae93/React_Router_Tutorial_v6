import React, { useState, useCallback, useEffect } from "react";
import axios from '../api';

const useGetBook = () => {
  const [isFetch, setIsFetch] = useState(false);
  const [list, setList] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [authors, setAuthors] = useState(null)
  const [checkedAuthors, setCheckedAuthors] = useState([]);

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
      setAuthors([...newAuthors].map(author => ({ name: author, check: false })));
    }
  }, [isFetch, list])

  const adaptFilter = (filterInfo) => {
    const newArr = [...list];
    console.log(filterInfo)
    const newList = newArr.filter((item, i) => {
      const isPrice = parseInt(filterInfo.price) ? item.sale_price < parseInt(filterInfo.price) : true;
      const isDate = new Date(item.datetime) < new Date(filterInfo.date);
      const isAuthor = filterInfo.authors.length > 0 ? filterInfo.authors.some(el => item.authors.includes(el)) : true;
      // const isAuthor = item.au
      console.log(isPrice, isDate, isAuthor)
      return isPrice && isDate && isAuthor;
    })
    setFilterd(newList);
    console.log(newList, "필터적용리스트")
  }

  const handleCheck = (index) => {
    setAuthors(prev => prev.map((data, i) => {
      if (i === index) {
        return { ...data, check: !data.check }
      } else {
        return data
      }
    }))
  }

  useEffect(() => {
    if (Array.isArray(authors) && authors.some(el => el.check)) {
      setCheckedAuthors(
        authors
        .filter(item => {
          return item.check
        })
        .map((item) => {
          return item.name
        })
      )
    }
  }, [authors])

  return [list, isFetch, filterd, getBooks, authors, adaptFilter,handleCheck, checkedAuthors, setAuthors]
}

export default useGetBook;