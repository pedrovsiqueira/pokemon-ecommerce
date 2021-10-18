import styled from 'styled-components';

export const SideCart = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  flex-flow: column nowrap;
  background-color: #eee;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100%;
  max-width: 500px;
  min-width: 320px;
  padding-top: 1rem;
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  @media only screen and (min-width: 800px) {
    min-width: 460px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 5px 20px;
  padding: 0 5px;

  width: 100%;

  button {
    background: transparent;
  }
`;

export const CartItems = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 8px;

  img {
    width: 70px;
    height: 70px;
  }

  p {
    color: ${props => props.theme.colors.textColor};
  }

  p + p {
    color: black;
    font-size: 0.6rem;
  }

  button {
    margin-top: 3px;
    background: transparent;
  }

  @media only screen and (max-width: 420px) {
    img {
      height: 50px;
      width: 50px;
    }
  }
`;

export const CartContent = styled.div``;

export const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 110px;
  margin: 0 10px;

  @media only screen and (max-width: 370px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e2e3;
  border-radius: 5px;
  margin: 0 10px;

  button {
    margin-top: 3px;
    background: transparent;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 80%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const CartFooter = styled.footer`
  bottom: 0;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${props => props.theme.colors.textColor};
  }

  button {
    width: 90%;
    font-size: 1.2rem;
  }
`;

export const CartTotal = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  p {
    font-size: 1.2rem;
  }
`;

export const CartPrice = styled.div`
  p {
    margin-right: 2px;
  }

  @media only screen and (max-width: 370px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
