import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { constants } from 'utils';

const PokemonContext = createContext();

const ContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState([]);

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

  const fetchPokemonByType = useCallback(async () => {
    try {
      const result = await api.get(constants.TYPE);
      setPokemons(result.data.pokemon);
      // notifySuccess('Pokemon loaded successfully');
    } catch {
      // notifyError('Error while loading the data');
    }
  }, []); //eslint-disable-line

  return (
    <PokemonContext.Provider
      value={{
        fetchPokemonByType,
        setSearch,
        search
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
