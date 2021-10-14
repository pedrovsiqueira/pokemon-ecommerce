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

  @media only screen and (max-width: 820px) {
    svg {
      width: 20px;
      left: 35px;
      top: 6px;
    }

    input {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 414px) {
    svg {
      width: 15px;
      left: 28px;
      top: 3px;
    }

    input {
      padding: 0.4rem 0.6rem 0.4rem 30px;
    }
  }
`;
