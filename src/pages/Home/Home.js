import { PokemonContext } from 'hooks/pokemonContext';
import { useContext, useEffect } from 'react';
import { Card } from 'components/Card/Card';
import { Container, Content } from './styles';
import { Modal } from 'components/Modal/Modal';

export const Home = () => {
  const {
    fetchPokemonByType,
    pokemons,
    triggerDetailsModal,
    setTriggerDetailsModal,
    setCurrentPokemon
  } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonByType();
  }, [fetchPokemonByType]);

  const handleDetails = pokemon => {
    setTriggerDetailsModal(prevState => !prevState);
    setCurrentPokemon(typeof pokemon === 'object' ? pokemon : {});
  };

  return (
    <Container>
      <Content>
        {pokemons.map(pokemon => (
          <Card pokemon={pokemon} handleDetails={() => handleDetails(pokemon)} />
        ))}
        <Modal
          isOpen={triggerDetailsModal}
          onRequestClose={handleDetails}
          className="react__modal__content"
        />
      </Content>
    </Container>
  );
};
