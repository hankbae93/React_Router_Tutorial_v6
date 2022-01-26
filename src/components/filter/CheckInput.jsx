import React, { useState, useCallback, useEffect} from 'react';
 
const CheckInput = ({ data }) => {
  const [checks, setChecks] = useState(
    Array(data.length)
      .fill()
      .map(() => false)
  );
  const [checkedItem, setCheckedItem] = useState([]);

  const initChecks = (data) => {
    setChecks(
      Array(data.length)
        .fill()
        .map(() => false)
    );
  };
  const handleCheck = useCallback(
    (index) => {
      setChecks((prev) =>
        prev.map((v, i) => {
          return i === index ? !v : v;
        })
      );
    },
    []
  );

  useEffect(() => {
    const newArr = [];
    checks.forEach((check, i) => {
      if (check) newArr.push(data[i]);
    });
    setCheckedItem(newArr);
  }, [checks, data]);

  return (
    <div>
    <h3>작가</h3>
      {
      data.map((item, i) => {
        return (
          <div onClick={() => handleCheck(i)}>
            <label htmlFor={`check${i}`}>
              <input
                type='checkbox'
                name
                id={`check${i}`}
                checked={checks[i]}
              />
              <span>{item}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckInput;
