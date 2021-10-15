import { PokemonContext } from 'hooks/pokemonContext';
import { useContext } from 'react';
import { formatPrice } from 'utils/helpers';
import { Container, Heading, SubHeading, Content } from './styles';
import { constants } from 'utils';

export const Details = () => {
  const { currentPokemon, loading } = useContext(PokemonContext);
  const { image, name, price, weight, height, id } = currentPokemon;

  return (
    <>
      {!loading && (
        <Container>
          <Heading>{name}</Heading>
          <SubHeading>{formatPrice(price)}</SubHeading>

          <img src={image} alt={`Pokemon ${name}`} />

          <Content>
            <div>
              <p>
                <strong>Peso:</strong> {weight}kg
              </p>
              <p>
                <strong>Altura:</strong> {height}m
              </p>
            </div>
            <div>
              <p>
                <strong>Id:</strong> {id}
              </p>
              <p>
                <strong>Tipo:</strong> {constants.TRANSLATED_TYPE}
              </p>
            </div>
          </Content>
        </Container>
      )}
    </>
  );
};
