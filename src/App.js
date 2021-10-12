import { constants, theme } from 'utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { useContext, useEffect } from 'react';
import { PokemonContext } from 'hooks/pokemonContext';
import { ToastContainer } from 'react-toastify';
import { Button } from 'components/Button/Button';

function App() {
  const { fetchPokemonByType } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonByType();
  }, [fetchPokemonByType]);

  return (
    <ThemeProvider theme={theme}>
      <h1 style={{ color: theme.colors.primary }}>{constants.TITLE}</h1>
      <Button backgroundColor={theme.colors.detailsButtonColor}>Detalhes</Button>
      <Button backgroundColor={theme.colors.addButtonColor}>Adicionar</Button>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
