import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { constants } from 'utils';
import { generatePrice, pokemonImageUrl } from 'utils/helpers';

const PokemonContext = createContext();

const ContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [triggerDetailsModal, setTriggerDetailsModal] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

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
    let { url } = pokemon.pokemon;
    url = `pokemon/${url.substring(34)}`;

    try {
      const result = await api.get(url);
      const { id, weight, species, types, height } = result.data;
      const pokemonData = {
        id,
        name: species.name.toUpperCase(),
        image: `${pokemonImageUrl}${id}.png`,
        price: generatePrice(id),
        types,
        weight,
        height
      };
      setPokemons(prevPokemons => [...prevPokemons, pokemonData]);
    } catch {
      // notifyError('Error while loading the data');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPokemonByType = useCallback(async () => {
    setLoading(true);
    try {
      const result = await api.get(`type/${constants.TYPE}`);
      result.data.pokemon.forEach(pokemon => fetchPokemonData(pokemon));
      // notifySuccess('Pokemon loaded successfully');
    } catch {
      // notifyError('Error while loading the data');
    }
  }, []); //eslint-disable-line

  return (
    <PokemonContext.Provider
      value={{
        fetchPokemonByType,
        pokemons,
        loading,
        setSearch,
        search,
        triggerDetailsModal,
        setTriggerDetailsModal,
        currentPokemon,
        setCurrentPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
