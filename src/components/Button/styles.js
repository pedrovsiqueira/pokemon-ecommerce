import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 1rem;
  width: 5rem;
  color: #fff;
  padding: 0.6rem;
  text-align: center;
  border: none;
  border-radius: 5px;
  transition: background-color 200ms linear;
  background-color: ${props => props.backgroundColor};

  :hover {
    filter: brightness(90%);
  }
`;
