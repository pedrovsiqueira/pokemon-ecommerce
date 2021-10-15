import React from 'react';

import { CartProvider } from './cartContext';
import { PokemonProvider } from './pokemonContext';

const AppProvider = ({ children }) => (
  <PokemonProvider>
    <CartProvider>{children}</CartProvider>
  </PokemonProvider>
);

export default AppProvider;
