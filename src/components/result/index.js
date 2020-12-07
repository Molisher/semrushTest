import React from "react";
import { ResultContainer } from "./styles/resultStyle";

const Result = ({ label, value }) => {
  return (
    <ResultContainer>
      <h2>{label}:</h2>
      <p>{value}</p>
    </ResultContainer>
  );
};

export default Result;
