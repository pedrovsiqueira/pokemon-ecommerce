import { render } from '@testing-library/react';
import { Details } from 'components/Details/Details';
import AppProvider from 'hooks';
import { theme } from 'utils';

const { ThemeProvider } = require('styled-components');

const DetailsComponent = () => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </AppProvider>
);

test('Should render Details without crashing', () => {
  render(<DetailsComponent />);
});

test('Should render Details without crashing1', () => {
  const currentPokemonMock = {
    name: 'BULBASAUR',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    id: 1,
    price: 'R$1.00'
  };
  render(<DetailsComponent />);

  jest.mock('hooks/pokemonContext', () =>
    jest.fn(() => ({
      currentPokemon: currentPokemonMock,
      loading: false
    }))
  );
});
