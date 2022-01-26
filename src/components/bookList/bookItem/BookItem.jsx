import React from 'react';
import moment from 'moment';

import {
  Container,
  BookThumbnail,
  BookInfo,
  BookContents,
} from "./BookItem.elements";

const BookItem = ({ 
  authors,
  contents,
  datetime,
  isbn,
  price,
  publisher,
  sale_price,
  status,
  thumbnail,
  title,
  translators,
  url
}) => {
  return (
    <Container>
      
      <BookThumbnail>
        <img src={thumbnail} alt={"/"}/>
        <h2>{title}</h2>
      </BookThumbnail>
      <div style={{ width: "100%" }}>
        <BookInfo>
          <p>{sale_price}</p>
          <p>{moment(datetime).format("YYYY.MM.DD")}</p>
          <p>{authors.join(",")}</p>
        </BookInfo>
        <BookContents>{contents}</BookContents>
      </div>
    </Container>
  );
};

export default BookItem;
