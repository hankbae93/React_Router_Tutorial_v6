import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchMore = () => {
  const navigate = useNavigate()
  const onClick = () => navigate("others")
  return (
    <div>
      <Link to="others">진짜 상대주소로 이동되네?</Link>
      <button onClick={onClick}>이것도 상대주소로 이동되네?</button>
    </div>
  );
};

export default SearchMore;
