import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  padding: 32px 0;
  margin: 48px auto 0;
  width: 250px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    box-shadow: inset 0 0 0 1000px ${props => props.theme.colors.cardBackgroundColor};
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
`;

export const Body = styled.body`
  padding-top: 10px;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  ${props => props.theme.colors.textColor}
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  ${props => props.theme.colors.textColor}
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 32px 0 32px;
  justify-content: space-around;
`;
