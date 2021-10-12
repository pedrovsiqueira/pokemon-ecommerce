import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    overflow-x: hidden;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
    letter-spacing: 0px;
    opacity: 1;
  }
  
  input {
    border: none;
  }

`;
