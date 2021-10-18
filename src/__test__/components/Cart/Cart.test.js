import { render } from '@testing-library/react';
import { Cart } from 'components/Cart/Cart';
import AppProvider from 'hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';

const CartComponent = ({ children }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppProvider>
);

test('Should render Home without crashing', () => {
  render(<Cart />, { wrapper: CartComponent });
});
