import { Button } from 'components/Button/Button';
import { Body, Container, ButtonsContainer, Heading, SubHeading } from './styles';
import { theme } from 'utils';

export const Card = ({ pokemon, handleDetails, handleAddToCart }) => {
  const { id, image, name, price } = pokemon || {};
  return (
    <Container key={id}>
      <img src={image} alt={`Pokemon ${name}`} />

      <Body>
        <Heading>{name}</Heading>
        <SubHeading>{price}</SubHeading>
      </Body>

      <ButtonsContainer>
        <Button onClick={handleDetails} backgroundColor={theme.colors.detailsButtonColor}>
          Detalhes
        </Button>
        <Button onClick={handleAddToCart} backgroundColor={theme.colors.addButtonColor}>
          Comprar
        </Button>
      </ButtonsContainer>
    </Container>
  );
};
