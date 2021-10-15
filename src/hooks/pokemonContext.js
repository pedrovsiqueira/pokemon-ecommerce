import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { constants } from 'utils';
import { formatPokemonData } from 'utils/helpers';

const PokemonContext = createContext();

const ContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [triggerDetailsModal, setTriggerDetailsModal] = useState(false);
  const [triggerSubmitModal, setTriggerSubmitModal] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [cartItems, setCartItems] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem('cartItems'));
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const result = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search));
    setFilteredPokemon(result);
  }, [pokemons, search]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toastMessageDefaults = {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };

  const notifySuccess = message => {
    toast.success(message, { ...toastMessageDefaults });
  };

  const notifyError = message => {
    toast.error(message, { ...toastMessageDefaults });
  };

  const fetchPokemonData = useCallback(async pokemon => {
    setLoading(true);
    let { url } = pokemon;
    try {
      const result = await api.get(url);
      const pokemonData = formatPokemonData(result.data);
      setCurrentPokemon(pokemonData);
    } catch (error) {
      notifyError('Erro ao carregar os dados');
    } finally {
      setLoading(false);
    }
  }, []); //eslint-disable-line

  const fetchPokemonByType = useCallback(async () => {
    setLoading(true);
    try {
      const result = await api.get(`type/${constants.TYPE}`);
      const formattedPokemonData = result.data.pokemon.map(pokemon =>
        formatPokemonData(pokemon.pokemon)
      );

      setPokemons(formattedPokemonData);
    } catch (error) {
      notifyError('Erro ao carregar os dados');
    } finally {
      setLoading(false);
    }
  }, []); //eslint-disable-line

  const handleAddToCart = pokemon => {
    const { id } = pokemon;
    const product = cartItems.find(item => item.id === id);
    const productAmount = (product?.amount ?? 0) + 1;

    if (product) {
      const updatedCart = cartItems.map(item => {
        if (item.id === id) {
          item.amount = productAmount;
        }

        return item;
      });

      notifySuccess('Pokemon adicionado ao carrinho');
      return setCartItems(updatedCart);
    }

    const updatedCart = [...cartItems, { ...pokemon, amount: 1 }];

    setCartItems(updatedCart);
    notifySuccess('Pokemon adicionado ao carrinho');
  };

  const handleRemoveFromCart = pokemonId => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== pokemonId);
      setCartItems(updatedCart);
      notifySuccess('Pokemon removido com sucesso');
    } catch {
      notifyError('Erro ao remover do carrinho');
    }
  };

  const handleAmountChange = (operation, id, amount) => {
    if (operation === '-' && amount === 1) {
      return handleRemoveFromCart(id);
    }

    const updatedAmount = operation === '+' ? ++amount : --amount;
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        item.amount = updatedAmount;
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const handleSubmit = () => {
    try {
      setOpenCart(false);
      setTriggerSubmitModal(true);
      notifySuccess('Compra finalizada com sucesso');
    } catch {
      notifyError('Erro ao finalizar compra');
    }
  };

  const closeSubmit = () => {
    setCartItems([]);
    setCurrentPokemon({});
    setTriggerDetailsModal(false);
    setTriggerSubmitModal(false);
  };

  const total = useMemo(() => cartItems.reduce((a, b) => a + b.price * b.amount, 0), [cartItems]);

  return (
    <PokemonContext.Provider
      value={{
        fetchPokemonByType,
        loading,
        setSearch,
        search,
        triggerDetailsModal,
        setTriggerDetailsModal,
        currentPokemon,
        fetchPokemonData,
        cartItems,
        handleAddToCart,
        openCart,
        setOpenCart,
        handleRemoveFromCart,
        handleAmountChange,
        triggerSubmitModal,
        handleSubmit,
        closeSubmit,
        filteredPokemon,
        total
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
