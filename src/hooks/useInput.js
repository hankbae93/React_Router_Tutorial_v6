import React, { useState, useCallback } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, [])

  const reset = useCallback(() => setValue(initialValue), [])

  return [value, onChange ,reset]
}

export default useInput;