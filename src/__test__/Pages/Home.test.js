import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AppProvider from 'hooks';
import placeholderImage from 'assets/placeholder.webp';
import { CartProvider } from 'hooks/cartContext';
import { PokemonProvider } from 'hooks/pokemonContext';
import { mockedPokemon } from 'mocks/handlers';
import { Home } from 'pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';
import { generatePrice } from 'utils/helpers';

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

test('Should update price if pokemon is added to cart twice', async () => {
  const total = generatePrice(mockedPokemon.id * 2);

  render(<Home />, { wrapper: HomeComponent });
  const buyButton = await screen.findByText(/comprar/i);
  fireEvent.click(buyButton);
  fireEvent.click(buyButton);

  const cartContainer = await screen.findByTestId('navbar-cart');
  fireEvent.click(cartContainer);

  expect(screen.getByText(total)).toBeInTheDocument();
});

test('Should show error message if not wrapped inside Provider', async () => {
  expect(() =>
    render(
      <CartProvider>
        <Home />
      </CartProvider>
    )
  ).toThrow('usePokemon must be used within a PokemonProvider');

  expect(() =>
    render(
      <PokemonProvider>
        <Home />
      </PokemonProvider>
    )
  ).toThrow('useCart must be used within a CartProvider');
});

test('Should add pokemon to cart and finalize the order', async () => {
  render(<Home />, { wrapper: HomeComponent });
  const buyButton = await screen.findByText(/comprar/i);
  fireEvent.click(buyButton);

  const cartContainer = await screen.findByTestId('navbar-cart');
  fireEvent.click(cartContainer);

  const finalizeButton = await screen.findByText(/finalizar pedido/i);
  fireEvent.click(finalizeButton);

  expect(await screen.findByText(/Compra Finalizada/i)).toBeInTheDocument();
  const closeBtn = screen.getByTestId('modal-close-btn');
  fireEvent.click(closeBtn);
});

test('Should render a place holder image when no image is available inside cart', async () => {
  const placeHolderSrc = `http://localhost/${placeholderImage}`;

  render(<Home />, { wrapper: HomeComponent });
  const buyButton = await screen.findByText(/comprar/i);
  fireEvent.click(buyButton);

  const cartContainer = await screen.findByTestId('navbar-cart');
  fireEvent.click(cartContainer);

  const imageElement = await screen.findByTestId('cart-image');

  fireEvent.error(imageElement, { target: imageElement });

  await waitFor(() => {
    expect(imageElement.src).toEqual(placeHolderSrc);
  });
});

test('Should be able to increase or decrease cart size', async () => {
  render(<Home />, { wrapper: HomeComponent });
  const buyButton = await screen.findByText(/comprar/i);
  fireEvent.click(buyButton);

  const cartContainer = await screen.findByTestId('navbar-cart');
  fireEvent.click(cartContainer);

  const decreaseButton = await screen.findByTestId('cart-increase-btn');
  fireEvent.click(decreaseButton);

  expect(screen.getByText('R$1.00')).toBeInTheDocument();

  const increaseButton = await screen.findByTestId('cart-decrease-btn');
  fireEvent.click(increaseButton);

  expect(screen.getByText('R$2.00')).toBeInTheDocument();
});
