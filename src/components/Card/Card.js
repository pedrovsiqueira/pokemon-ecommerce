import { Button } from 'components/Button/Button';
import { Content, Container, ButtonsContainer, Heading, SubHeading } from './styles';
import { theme } from 'utils';
import { formatPrice } from 'utils/helpers';
import placeholderImage from 'assets/placeholder.webp';

export const Card = ({ pokemon, handleDetails, handleAddToCart }) => {
  const { id, image, name, price } = pokemon;

  return (
    <Container key={id}>
      <img
        src={image}
        alt={`Pokemon ${name}`}
        onError={event => (event.currentTarget.src = placeholderImage)}
        loading="lazy"
        data-testid="card-img"
      />

      <Content>
        <Heading>{name}</Heading>
        <SubHeading>{formatPrice(price)}</SubHeading>
      </Content>

      <ButtonsContainer>
        <Button onClick={handleDetails} backgroundColor={theme.colors.primaryButtonColor}>
          Detalhes
        </Button>
        <Button onClick={handleAddToCart} backgroundColor={theme.colors.secondaryButtonColor}>
          Comprar
        </Button>
      </ButtonsContainer>
    </Container>
  );
};
