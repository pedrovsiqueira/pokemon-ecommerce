import { constants, theme } from 'utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { useContext, useEffect } from 'react';
import { PokemonContext } from 'hooks/pokemonContext';
import { ToastContainer } from 'react-toastify';
import { Input } from 'components/Input/Input';
import { Card } from 'components/Card/Card';

function App() {
  const { fetchPokemonByType, pokemons, setSearch, search, loading } = useContext(PokemonContext);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetchPokemonByType();
  }, [fetchPokemonByType]);

  return (
    <ThemeProvider theme={theme}>
      <h1 style={{ color: theme.colors.primary }}>{constants.TITLE}</h1>
      <Input value={search} placeholder="Digite o que está procurando" onChange={handleSearch} />
      {!loading && <Card pokemon={pokemons[0]} />}
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
