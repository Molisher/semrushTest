import React from "react";
import { StyledButton } from "./styles/buttonStyle";

const Button = ({ type, label, onClick }) => {
  return <StyledButton onClick={onClick} type={type}>{label}</StyledButton>;
};

export default Button;
