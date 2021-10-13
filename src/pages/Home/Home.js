import { PokemonContext } from 'hooks/pokemonContext';
import { useContext, useEffect } from 'react';
import { Card } from 'components/Card/Card';
import { Container, Content } from './styles';

export const Home = () => {
  const { fetchPokemonByType, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonByType();
  }, [fetchPokemonByType]);

  return (
    <Container>
      <Content>
        {pokemons.map(pokemon => (
          <Card pokemon={pokemon} />
        ))}
      </Content>
    </Container>
  );
};
