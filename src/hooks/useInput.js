import React, { useState, useCallback } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, [])

  const reset = useCallback(() => setValue(""), [])

  return [value, onChange ,reset]
}

export default useInput;