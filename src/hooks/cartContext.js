import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { notifyError, notifySuccess } from 'utils/helpers';
import { usePokemon } from './pokemonContext';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { triggerDetailsModal, setTriggerDetailsModal, setCurrentPokemon } = usePokemon();
  const [triggerSubmitModal, setTriggerSubmitModal] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem('cartItems'));
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = pokemon => {
    const { id } = pokemon;
    const product = cartItems.find(item => item.id === id);
    const productAmount = (product?.amount ?? 0) + 1;

    if (product) {
      const updatedCart = cartItems.map(item => {
        if (item.id === id) {
          item.amount = productAmount;
        }

        return item;
      });

      notifySuccess('Pokemon adicionado ao carrinho');
      return setCartItems(updatedCart);
    }

    const updatedCart = [...cartItems, { ...pokemon, amount: 1 }];

    setCartItems(updatedCart);
    notifySuccess('Pokemon adicionado ao carrinho');
  };

  const handleRemoveFromCart = pokemonId => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== pokemonId);
      setCartItems(updatedCart);
      notifySuccess('Pokemon removido com sucesso');
    } catch {
      notifyError('Erro ao remover do carrinho');
    }
  };

  const handleAmountChange = (operation, id, amount) => {
    if (operation === '-' && amount === 1) {
      return handleRemoveFromCart(id);
    }

    const updatedAmount = operation === '+' ? ++amount : --amount;
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        item.amount = updatedAmount;
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const handleSubmit = () => {
    try {
      setOpenCart(false);
      setTriggerSubmitModal(true);
      notifySuccess('Compra finalizada com sucesso');
    } catch {
      notifyError('Erro ao finalizar compra');
    }
  };

  const closeSubmit = () => {
    setCartItems([]);
    setCurrentPokemon({});
    setTriggerDetailsModal(false);
    setTriggerSubmitModal(false);
  };

  const total = useMemo(() => cartItems.reduce((a, b) => a + b.price * b.amount, 0), [cartItems]);

  return (
    <CartContext.Provider
      value={{
        triggerDetailsModal,
        setTriggerDetailsModal,
        cartItems,
        handleAddToCart,
        openCart,
        setOpenCart,
        handleRemoveFromCart,
        handleAmountChange,
        triggerSubmitModal,
        handleSubmit,
        closeSubmit,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export { CartProvider, useCart };
