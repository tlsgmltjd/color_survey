import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const currentValue = event.target.value;
    setValue(currentValue);
  };

  return [value, onChange, setValue];
};
