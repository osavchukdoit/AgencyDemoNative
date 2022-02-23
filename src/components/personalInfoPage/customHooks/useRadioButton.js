import { useState } from "react";

function useRadioButton(initialValue) {
  const [value, setValue] = useState(initialValue);

  const change = (status) => {
    setValue(status);
  };
  return [value, change];
}

export { useRadioButton };
