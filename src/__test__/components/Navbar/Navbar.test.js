import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';

import user from '@testing-library/user-event';
import AppProvider from 'hooks';
import { Navbar } from 'components/Nav/Navbar';

const NavbarComponent = ({ children }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppProvider>
);

test('Should render Navbar without crashing', () => {
  render(<Navbar />, { wrapper: NavbarComponent });
});

test('Should update input value on change', () => {
  const value = 'pikachu';
  render(<Navbar />, { wrapper: NavbarComponent });
  const input = screen.getByRole('searchbox');
  user.type(input, value);
  expect(input).toHaveDisplayValue(value);
});
