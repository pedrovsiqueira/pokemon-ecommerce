import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 4fr));
  gap: 20px 20px;

  width: 1100px;
  margin: 70px auto 40px auto;
`;

export const SubmitContainer = styled.div`
  margin-top: 40px;
  text-align: center;

  h3 + h3 {
    margin-top: 20px;
  }
  img {
    width: 285px;
    margin: 10% 0 10% 0;
  }
`;

export const NotFoundContainer = styled.div`
  color: ${props => props.theme.colors.textColor};
  text-align: center;
  margin-top: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    width: 320px;
  }
`;
