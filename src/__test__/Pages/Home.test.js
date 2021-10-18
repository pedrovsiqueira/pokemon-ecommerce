import { render, screen, fireEvent } from '@testing-library/react';
import AppProvider from 'hooks';
import { mockedPokemon } from 'mocks/handlers';
import { Home } from 'pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';

const HomeComponent = ({ children }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppProvider>
);

test('Should render Home without crashing', () => {
  render(<Home />, { wrapper: HomeComponent });
});

test('Should add and remove a pokemon to cart', async () => {
  render(<Home />, { wrapper: HomeComponent });
  const buyButton = await screen.findByText(/comprar/i);
  fireEvent.click(buyButton);

  const cartContainer = await screen.findByTestId('navbar-cart');
  fireEvent.click(cartContainer);

  const removeFromCartButton = await screen.findByTestId('cart-remove-button');
  expect(removeFromCartButton).toBeInTheDocument();

  fireEvent.click(removeFromCartButton);

  expect(removeFromCartButton).not.toBeInTheDocument();
});

test('Should open pokemon details', async () => {
  render(<Home />, { wrapper: HomeComponent });
  const detailsButton = await screen.findByText(/detalhes/i);
  fireEvent.click(detailsButton);
  const pokemonRegex = new RegExp(mockedPokemon.name, 'i');
  expect(await screen.findByText(pokemonRegex)).toBeInTheDocument();
});

test('Should display empty cart message and close cart', () => {
  render(<Home />, { wrapper: HomeComponent });
  const cartContainer = screen.getByTestId('navbar-empty-cart');
  fireEvent.click(cartContainer);

  const emptyCartMessage = screen.getByText(/carrinho vazio/i);

  expect(emptyCartMessage).toBeInTheDocument();

  const closeBtn = screen.getByTestId('cart-close-btn');
  fireEvent.click(closeBtn);
});
