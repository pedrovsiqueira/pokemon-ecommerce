import { usePokemon } from 'hooks/pokemonContext';
import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Container, Content, NotFoundContainer } from './styles';
import { Modal } from 'components/Modal/Modal';
import { Navbar } from 'components/Nav/Navbar';
import { theme } from 'utils';
import { FallbackLoader } from 'components/FallbackLoader/FallbackLoader';
import { Details } from 'components/Details/Details';
import { Submit } from 'components/Submit/Submit';
import { useCart } from 'hooks/cartContext';

export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const {
    fetchPokemonByType,
    filteredPokemon,
    triggerDetailsModal,
    setTriggerDetailsModal,
    loading,
    fetchPokemonData,
    pokemons
  } = usePokemon();

  const { handleAddToCart, triggerSubmitModal, total, closeSubmit } = useCart();

  useEffect(() => {
    fetchPokemonByType();
  }, [fetchPokemonByType]);

  useEffect(() => {
    if (triggerDetailsModal) {
      fetchPokemonData(selectedPokemon);
    }
  }, [fetchPokemonData, selectedPokemon, triggerDetailsModal]);

  const handleDetails = pokemon => {
    setTriggerDetailsModal(prevState => !prevState);
    setSelectedPokemon(pokemon);
  };

  const isEmpty = filteredPokemon.length === 0 && pokemons.length > 0;

  return (
    <Container>
      <Navbar />
      <Content>
        {filteredPokemon.map(pokemon => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleDetails={() => handleDetails(pokemon)}
            handleAddToCart={() => handleAddToCart(pokemon)}
            handle
          />
        ))}

        {isEmpty && (
          <NotFoundContainer>
            <h1>Nenhum pokemon encontrado...</h1>
          </NotFoundContainer>
        )}

        <Modal
          isOpen={triggerDetailsModal}
          onRequestClose={handleDetails}
          className="react__modal__content"
        >
          <Details />
        </Modal>

        <Modal
          isOpen={triggerSubmitModal}
          onRequestClose={closeSubmit}
          className="react__modal__content"
        >
          <Submit total={total} />
        </Modal>
        <FallbackLoader visible={loading} color={theme.colors.textColor} />
      </Content>
    </Container>
  );
};
