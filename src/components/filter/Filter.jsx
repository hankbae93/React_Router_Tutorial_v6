import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import useInput from '../../hooks/useInput';
import queryString from 'query-string';

import {
  Container,
  FilterBox,
  CheckContainer,
  CheckBox
} from './Filter.elements';

const Filter = ({ isFetch, getBooks, authors, adaptFilter, handleCheck, checkedAuthors, setAuthors }) => {
  const [value, onChange, setValue] = useInput("");
  const [price, onChangePrice, setPrice] = useInput(0)
  const [date, onChangeDate, setDate] = useInput( new Date().toISOString().substring(0, 10))

  useEffect(() => {
    if (value) {
      getBooks(value)
    }
  }, [value])

  const navigate = useNavigate()

  useEffect(() => {
    if (value && isFetch) {
      let urlStrings = `?query=${value}&price=${price}&date=${date}&`;
      if (checkedAuthors.length > 0) {
        checkedAuthors.forEach(item => urlStrings += `author=${item}&`)
      }
      navigate(urlStrings)
    }
    
    adaptFilter({ price, date, authors: checkedAuthors })
    console.log(value, price, date,)
  }, [value, price, date, isFetch, checkedAuthors])

  const location = useLocation();

  useEffect(() => {
    const querys = location.search || null;
    if (querys) {
      const qs = queryString.parse(querys)
      console.log(qs)
      setValue(prev => qs.query || prev)
      setPrice(prev => qs.price || prev);
      setDate(prev => qs.date || prev)

      if (isFetch && authors) {
        console.log("여기 실행?")
        const isArray = Array.isArray(qs.authors);
        
      }
    }
  }, [location, isFetch])

  useEffect(() => console.log(authors, "authors"), [authors])

  return (
    <Container>
      <FilterBox>
        <input 
          placeholder='키워드를 입력해주세요' 
          value={value} 
          onChange={onChange} 
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

      {authors &&
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
