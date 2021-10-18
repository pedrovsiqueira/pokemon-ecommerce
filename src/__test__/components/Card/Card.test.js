import { theme } from 'utils';
import user from '@testing-library/user-event';
import placeholderImage from 'assets/placeholder.webp';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Card } from 'components/Card/Card';

const CardComponent = () => (
  <ThemeProvider theme={theme}>
    <Card
      pokemon={pokemon}
      handleDetails={handleClickDetails}
      handleAddToCart={handleClickAddToCart}
    />
  </ThemeProvider>
);

const handleClickDetails = jest.fn();
const handleClickAddToCart = jest.fn();
const pokemon = {
  name: 'BULBASAUR',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  id: 1,
  price: 'R$1.00'
};

test('Should render Card without crashing', () => {
  render(<CardComponent />);
});

test('Should render pokemon data', () => {
  const { container } = render(<CardComponent />);

  const nameElement = container.querySelector('h1');
  const priceElement = container.querySelector('p');

  expect(nameElement).toHaveTextContent(pokemon.name);
  expect(priceElement).toHaveTextContent(pokemon.price);
});

test('Should render pokemon image', () => {
  const { container } = render(<CardComponent />);
  const imageElement = container.querySelector('img');

  expect(imageElement).toBeInTheDocument();
  expect(imageElement.src).toEqual(pokemon.image);
});

test('Should render a place holder image when no image is available', async () => {
  const placeHolderSrc = `http://localhost/${placeholderImage}`;

  const { container } = render(<CardComponent />);

  const imageElement = container.querySelector('img');
  fireEvent.error(imageElement, { target: imageElement });

  await waitFor(() => {
    expect(imageElement.src).toEqual(placeHolderSrc);
  });
});

test('Should render and click card buttons', () => {
  render(<CardComponent />);

  expect(screen.getByText(/detalhes/i)).toBeInTheDocument();
  expect(screen.getByText(/comprar/i)).toBeInTheDocument();

  user.click(screen.getByText(/detalhes/i));
  user.click(screen.getByText(/comprar/i));

  expect(handleClickDetails).toHaveBeenCalled();
  expect(handleClickAddToCart).toHaveBeenCalled();
});
