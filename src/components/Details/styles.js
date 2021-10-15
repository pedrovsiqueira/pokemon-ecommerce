import styled from 'styled-components';

export const Container = styled.div`
  img {
    margin-top: 1.5rem;
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  ${props => props.theme.colors.textColor}
`;

export const SubHeading = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  ${props => props.theme.colors.textColor}
`;

export const Content = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  div > p {
    font-size: 1.3rem;
  }
`;
