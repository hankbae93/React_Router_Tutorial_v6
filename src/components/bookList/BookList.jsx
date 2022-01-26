import React from 'react';
import styled from 'styled-components';

import BookItem from './bookItem';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em 1%;
  padding: 1em 0;
`

const BookList = ({ list }) => {
  return (
    <Container>
      {
        list.map((data, i) => {
          return <BookItem {...data} key={i} />
        })
      }
    </Container>
  )
};

export default BookList;
