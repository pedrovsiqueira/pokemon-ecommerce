import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --toastify-text-color-light: ${props => props.theme.colors.textColor};
  }

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

  .react__modal__overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react__modal__content {
    width: 100%;
    height: 525px;
    max-width: 350px;
    background: #fff;
    padding: 2rem;
    position: relative;
    border-radius: 20px;
  }

  .btn--close-modal {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}
`;
