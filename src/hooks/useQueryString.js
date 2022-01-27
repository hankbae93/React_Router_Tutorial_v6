import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useQueryString = () => {
  const location = useLocation();
  const [queries, setQueries] = useState(null);

  useEffect(() => {
    const qs = queryString.parse(location.search);
    setQueries(qs);
  }, [location])

  return queries;
};

export default useQueryString;