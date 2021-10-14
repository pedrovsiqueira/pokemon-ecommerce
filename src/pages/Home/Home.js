import { PokemonContext } from 'hooks/pokemonContext';
import { useContext, useEffect } from 'react';
import { Card } from 'components/Card/Card';
import { Container, Content } from './styles';
import { Modal } from 'components/Modal/Modal';
import { Navbar } from 'components/Nav/Navbar';

export const Home = () => {
  const {
    fetchPokemonByType,
    pokemons,
    triggerDetailsModal,
    setTriggerDetailsModal,
    setCurrentPokemon,
    setSearch,
    search
  } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonByType();
  }, [fetchPokemonByType]);

  const handleDetails = pokemon => {
    setTriggerDetailsModal(prevState => !prevState);
    setCurrentPokemon(typeof pokemon === 'object' ? pokemon : {});
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Navbar search={search} handleSearch={handleSearch} />
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
