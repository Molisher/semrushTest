import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    box-sizing:border-box;
    }
a{
    text-decoration:none; 
    color:inherit; 
    cursor:pointer;}
button{
    background-color:transparent; 
    color:inherit; 
    border-width:0; padding:0; 
    cursor:pointer;
    }
ul, ol, dd{
    margin:0; 
    padding:0; 
    list-style:none;
    }
h1, h2, h3, h4, h5, h6{
    margin:0; 
    font-size:inherit; 
    font-weight:inherit;
    }
p{margin:0;}

`;

export const AppContainer = styled.div`

  width: 60%;
  margin: auto;
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const InputPart = styled.div`
  width: 30%;
`;

export const ResultPart = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;`
