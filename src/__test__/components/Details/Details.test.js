import { render, screen } from '@testing-library/react';
import { Details } from 'components/Details/Details';
import AppProvider from 'hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';

jest.mock('hooks/pokemonContext', () => ({
  ...jest.requireActual('hooks/pokemonContext'),
  usePokemon: () => ({
    loading: false,
    currentPokemon: currentPokemonMock
  })
}));

const currentPokemonMock = {
  name: 'BULBASAUR',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  id: 1,
  price: 'R$1.00',
  weight: 10,
  height: 2
};

const DetailsComponent = ({ children }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppProvider>
);

test('Should render Details without crashing', () => {
  render(<Details />, { wrapper: DetailsComponent });
});

test('Should render pokemon data', () => {
  render(<Details />, { wrapper: DetailsComponent });
  expect(screen.getByText(currentPokemonMock.price)).toBeInTheDocument();
  expect(screen.getByText(currentPokemonMock.name)).toBeInTheDocument();
  expect(screen.getByText(`${currentPokemonMock.weight}kg`)).toBeInTheDocument();
  expect(screen.getByText(`${currentPokemonMock.height}m`)).toBeInTheDocument();

  expect(screen.getByRole('img')).toHaveAttribute('src', currentPokemonMock.image);
});
