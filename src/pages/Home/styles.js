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
