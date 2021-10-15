import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { constants } from 'utils';
import { formatPokemonData, notifyError } from 'utils/helpers';

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [triggerDetailsModal, setTriggerDetailsModal] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    const result = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search));
    setFilteredPokemon(result);
  }, [pokemons, search]);

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
        filteredPokemon,
        setCurrentPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }

  return context;
};

export { PokemonProvider, usePokemon };
