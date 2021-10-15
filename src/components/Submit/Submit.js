import { formatPrice, generateCashback } from 'utils/helpers';
import { Container } from './styles';
import checkoutGif from 'assets/checkout.gif';

export const Submit = ({ total }) => {
  return (
    <Container>
      <h1>Compra Finalizada</h1>
      <h2>Total: {formatPrice(total)}</h2>
      <img src={checkoutGif} alt="Checkout Gif" />
      <h3>Você recebeu {generateCashback(total)} de volta.</h3>
      <h3>Utilize o cupom POKEMON na sua próxima compra para um desconto de 10%.</h3>
    </Container>
  );
};
