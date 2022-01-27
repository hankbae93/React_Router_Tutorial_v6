import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useInput from '../../hooks/useInput';

import {
  Container,
  FilterBox,
  CheckContainer,
  CheckBox
} from './Filter.elements';

const Filter = ({ list, getBooks, setFilterd, setAuthorsState }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const [query, onChangeQuery, setQuery] = useInput("");
  const [price, onChangePrice, setPrice] = useInput(0)
  const [date, onChangeDate, setDate] = useInput(new Date().toISOString().substring(0, 10))
  const [authors, setAuthors] = useState([]);
  
  useEffect(() => {
    if (query) {
      getBooks(query); 
      console.log(authors, "authors")
    }
  }, [query])

  useEffect(() => {
    if (list.length > 0) {
      setAuthors(prev => {
        const authorList = setAuthorsState(list)
        const qs = queryString.parse(location.search);
        if (qs.authors) {
          const qsAuthors = qs.authors.split(",");
          console.log(qsAuthors, "qsAuthors")
          console.log(authorList, "authorList")
          return authorList.map(item => {
            if (qsAuthors.includes(item.name)) {
              return {...item, check: true }
            } else {
              return item;
            }
          })
        } else {
          return authorList
        }
      })
    }
    
  }, [list])

  useEffect(() => {
    console.log(authors, "AUTHOR")
  }, [authors])

  useEffect(() => {
    const qs = queryString.parse(location.search);
    if (qs) {
      setQuery(qs.query);
      setPrice(qs.price || 0);
      setDate(qs.date || new Date().toISOString().substring(0, 10));
      
    }
  }, [location])


  const filterList = () => {
    if (!query) return;
    setFilterd(prev => list.filter((item, i) => {
        const isPrice = price != 0 ? parseInt(price) > item.sale_price: true;
        const isDate = new Date(date) > new Date(item.datetime);
        if (authors.some(el => el.check)) {
          const checkdAuthors = authors
            .filter(item => item.check)
            .map(item => item.name);
          
          const isAuthor = checkdAuthors.some(el => item.authors.includes(el));
          return isPrice && isDate && isAuthor
        } else {
          return isPrice && isDate;
        }
        // const isAuthor = item.authors()
        
    }))
  }

  const movePage = () => {
    if (!query) return;
    const qs = queryString.parse(location.search);

    const checkdAuthors = authors
    .filter(item => item.check)
    .map(item => item.name);
    if (qs.authors.length > 1 && checkdAuthors.length === 0) {
      return;
    }

    const obj = {
      query, price, date, authors: checkdAuthors
    }

    const URL = new URLSearchParams(obj).toString();
    navigate("?" + URL)
  }
  
  useEffect(() => {
    filterList();
    movePage()
  }, [query, price, date, authors])
  
  const handleCheck = (index) => {
    setAuthors(prev => prev.map((data, i) => {
      if (i === index) {
        return { ...data, check: !data.check }
      } else {
        return data
      }
    }))
  }



  return (
    <Container>
      <FilterBox>
        <input 
          placeholder='키워드를 입력해주세요' 
          value={query} 
          onChange={onChangeQuery} 
        />
      </FilterBox>

      <FilterBox>
        <input 
          type="range" 
          value={price} 
          onChange={onChangePrice} 
          max={100000}
          step={100}
        />
        <span>{price}원 이하</span>
      </FilterBox>

      <FilterBox>
        <input 
          type="date" 
          value={date} 
          onChange={onChangeDate} 
        />
      </FilterBox>

      {authors.length > 0 &&
        <FilterBox>
          <h3>작가</h3>
          <CheckContainer>
          {
            authors.map((author, i) => {
              return (
                <li key={i} onClick={() => handleCheck(i)}>
                  <CheckBox isCheck={author.check}/> {author.name}
                </li>
              )
            })
          }
          </CheckContainer>
        </FilterBox>
      }
    </Container>
  )
};

export default Filter;
