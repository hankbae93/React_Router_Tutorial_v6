import React, { useState, useCallback, useEffect} from 'react';
 
const CheckInput = ({ checks, data, handleCheck}) => {
  

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
