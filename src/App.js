import { constants, theme } from 'utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { useContext, useEffect } from 'react';
import { PokemonContext } from 'hooks/pokemonContext';
import { ToastContainer } from 'react-toastify';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';

function App() {
  const { fetchPokemonByType, setSearch, search } = useContext(PokemonContext);

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
      <Button backgroundColor={theme.colors.detailsButtonColor}>Detalhes</Button>
      <Button backgroundColor={theme.colors.addButtonColor}>Adicionar</Button>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
