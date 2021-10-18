import {
  SideCart,
  Heading,
  CartItems,
  CartProduct,
  CartQuantity,
  CartFooter,
  CartTotal,
  Content,
  CartPrice
} from './styles';
import { Fragment } from 'react';
import { ButtonIcon } from 'components/Button/ButtonIcon';
import { theme } from 'utils';
import { Divider } from 'components/Divider/Divider';
import { Button } from 'components/Button/Button';
import { formatPrice } from 'utils/helpers';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactComponent as PlusIcon } from 'assets/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/minus.svg';
import { ReactComponent as TrashIcon } from 'assets/trash.svg';
import placeholderImage from 'assets/placeholder.webp';
import { useCart } from 'hooks/cartContext';
import { NotFoundContainer } from 'pages/Home/styles';

export const Cart = () => {
  const {
    cartItems,
    openCart,
    setOpenCart,
    handleRemoveFromCart,
    handleAmountChange,
    handleSubmit,
    total
  } = useCart();

  return (
    <SideCart open={openCart}>
      <Content>
        <Heading>
          <h1>Carrinho</h1>
          <ButtonIcon
            data-testid="cart-close-btn"
            onClick={() => setOpenCart(prevState => !prevState)}
            Icon={CloseIcon}
          />
        </Heading>
        <Divider />

        {cartItems.map(item => (
          <Fragment key={item.id}>
            <CartItems>
              <ButtonIcon
                data-testid="cart-remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
                Icon={TrashIcon}
              />

              <img
                src={item.image}
                alt={item.name}
                onError={event => (event.currentTarget.src = placeholderImage)}
                data-testid="cart-image"
              />

              <CartProduct>
                <p>{item.name}</p>
              </CartProduct>

              <CartQuantity>
                <ButtonIcon
                  onClick={() => handleAmountChange('-', item.id, item.amount)}
                  Icon={MinusIcon}
                  data-testid="cart-decrease-btn"
                />
                {item.amount}
                <ButtonIcon
                  data-testid="cart-increase-btn"
                  onClick={() => handleAmountChange('+', item.id, item.amount)}
                  Icon={PlusIcon}
                />
              </CartQuantity>

              <CartPrice>
                <p>{formatPrice(item.price * item.amount)}</p>
              </CartPrice>
            </CartItems>
            <Divider />
          </Fragment>
        ))}
      </Content>

      {!cartItems?.length && (
        <NotFoundContainer>
          <h2>Carrinho vazio...</h2>
        </NotFoundContainer>
      )}

      <CartFooter>
        <CartTotal>
          <p>Total: {formatPrice(total)}</p>
        </CartTotal>
        <Button
          disabled={!cartItems.length}
          onClick={handleSubmit}
          backgroundColor={theme.colors.secondaryButtonColor}
        >
          Finalizar Pedido
        </Button>
      </CartFooter>
    </SideCart>
  );
};
