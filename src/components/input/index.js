import React from "react";

import { StyledInput, InputContainer } from "./styles/inputStyle";

const Input = ({ id, suffix, label, value, setter, selectSetter }) => {
  const handleChange = (e) => {
    let number = e.target.value;
    if (number.length === 0) {
      setter(null)
    } else if (number.includes("не")){
      setter(null)
    } else{
      setter(parseInt(number.replace(/\s/g, "")).toLocaleString());
      if(id === 'payment'){
        selectSetter(null)
      }
    }
  };  
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        suffix={suffix}
        size="large"
        id={id}
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default Input;
