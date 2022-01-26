import React, { useEffect } from 'react';
import useInput from '../../hooks/useInput';

import {
  Container,
  FilterBox
} from './Filter.elements';
import CheckInput from './CheckInput';

const Filter = ({ isFetch, getBooks, authors }) => {
  const [value, onChange, reset] = useInput("");
  const [price, onChangePrice, resetPrice] = useInput(0)
  const [date, onChangeDate, resetDate] = useInput(new Date())

  useEffect(() => {
    if (value) {
      getBooks(value)
    }
  }, [value])

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

      {authors && (
        <FilterBox>
          <CheckInput data={authors} />
        </FilterBox>
      )}
    </Container>
  )
};

export default Filter;
