import { PokemonContext } from 'hooks/pokemonContext';
import { useContext, useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Container, Content, SubmitContainer } from './styles';
import { Modal } from 'components/Modal/Modal';
import { Navbar } from 'components/Nav/Navbar';
import { theme } from 'utils';
import { FallbackLoader } from 'FallbackLoader/FallbackLoader';
import { Details } from 'components/Details/Details';
import checkoutGif from 'assets/checkout.gif';
import { formatPrice, generateCashback } from 'utils/helpers';

export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const {
    fetchPokemonByType,
    filteredPokemon,
    triggerDetailsModal,
    setTriggerDetailsModal,
    setSearch,
    search,
    loading,
    fetchPokemonData,
    handleAddToCart,
    triggerSubmitModal,
    total,
    closeSubmit
  } = useContext(PokemonContext);

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

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Navbar search={search} handleSearch={handleSearch} />
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
          <SubmitContainer>
            <h1>Compra Finalizada</h1>
            <h2>Total: {formatPrice(total)}</h2>
            <img src={checkoutGif} alt="Checkout Gif" />
            <h3>Você recebeu {generateCashback(total)} de volta.</h3>
            <h3>Utilize o cupom POKEMON na sua próxima compra para um desconto de 10%.</h3>
          </SubmitContainer>
        </Modal>
        <FallbackLoader visible={loading} color={theme.colors.textColor} />
      </Content>
    </Container>
  );
};
