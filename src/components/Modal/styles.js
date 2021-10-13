import styled from 'styled-components';

export const Container = styled.div`
  img {
    margin-top: 1.5rem;
    box-shadow: inset 0 0 0 1000px ${props => props.theme.colors.cardBackgroundColor};
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
`;

export const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  ${props => props.theme.colors.textColor}
`;

export const SubHeading = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  ${props => props.theme.colors.textColor}
`;

export const Body = styled.body`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
