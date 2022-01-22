import React from 'react';
import { useParams } from 'react-router-dom';

const SearchDetail = () => {
  const { keyword } = useParams()
  return <div>{keyword}의 검색결과</div>;
};

export default SearchDetail;
