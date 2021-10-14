import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 20px;
    top: 10px;
  }

  input {
    background-color: ${props => props.theme.colors.inputBackgroundColor};
    border: 1px solid ${props => props.theme.colors.inputBackgroundColor};
    padding: 0.6rem;
    padding-left: 45px;
    width: 100%;
    border-radius: 5px;
    transition: all 200ms ease;
    font-size: 1.2rem;

    &::placeholder {
      color: ${props => props.theme.colors.inputTextPlaceholder};
      font-size: 1.2rem;
    }

    &:focus {
      background: ${props => props.theme.colors.inputBackgroundColorFocused};
      border: 1px solid ${props => props.theme.colors.inputBackgroundColorFocused};
      transition: all 200ms ease;
    }

    &::-webkit-search-cancel-button:hover {
      cursor: pointer;
    }
  }
`;
