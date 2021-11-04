import { useState } from "react";

const useInputValue = () => {
  const [valuesForm, setValuesForm] = useState({});

  const handlerInput = (e) => {
    setValuesForm({
      ...valuesForm,
      [e.target.name]: e.target.value,
    });
  };

  return { valuesForm, handlerInput };
};

export { useInputValue };
