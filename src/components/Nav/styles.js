import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  background: ${props => props.theme.colors.backgroundColor} 0% 0% no-repeat padding-box;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;

  p {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
  }

  img {
    width: 300px;
    margin-top: 10px;
  }

  svg {
    width: 50px;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
  }

  input {
    margin: 0 20px;
  }

  @media only screen and (max-width: 820px) {
    img {
      width: 200px;
    }
  }

  @media only screen and (max-width: 520px) {
    img {
      width: 150px;
    }

    p {
      font-size: 0.9rem;
    }

    svg {
      width: 30px;
    }
  }

  @media only screen and (max-width: 414px) {
    img {
      width: 100px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1100px;
  width: 100%;
  padding: 0 20px;
`;
