import {
  SideCart,
  Heading,
  CartItems,
  CartProduct,
  CartQuantity,
  CartFooter,
  CartTotal,
  Content
} from './styles';
import { PokemonContext } from 'hooks/pokemonContext';
import { Fragment, useContext } from 'react';
import { ButtonIcon } from 'components/Button/ButtonIcon';
import { theme } from 'utils';
import { Divider } from 'components/Divider/Divider';
import { Button } from 'components/Button/Button';
import { formatPrice } from 'utils/helpers';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactComponent as PlusIcon } from 'assets/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/minus.svg';
import { ReactComponent as TrashIcon } from 'assets/trash.svg';
import placeholderImage from 'assets/placeholder.png';

export const Cart = () => {
  const {
    cartItems,
    openCart,
    setOpenCart,
    handleRemoveFromCart,
    handleAmountChange,
    handleSubmit,
    total
  } = useContext(PokemonContext);

  return (
    <SideCart open={openCart}>
      <Content>
        <Heading>
          <h1>Carrinho</h1>
          <ButtonIcon onClick={() => setOpenCart(prevState => !prevState)} Icon={CloseIcon} />
        </Heading>
        <Divider />

        {cartItems.map(item => (
          <Fragment key={item.id}>
            <CartItems>
              <ButtonIcon onClick={() => handleRemoveFromCart(item.id)} Icon={TrashIcon} />

              <img
                src={item.image}
                alt={item.name}
                onError={event => (event.currentTarget.src = placeholderImage)}
              />

              <CartProduct>
                <p>{item.name}</p>
              </CartProduct>

              <CartQuantity>
                <ButtonIcon
                  onClick={() => handleAmountChange('-', item.id, item.amount)}
                  Icon={MinusIcon}
                />
                {item.amount}
                <ButtonIcon
                  onClick={() => handleAmountChange('+', item.id, item.amount)}
                  Icon={PlusIcon}
                />
              </CartQuantity>

              <p>{formatPrice(item.price * item.amount)}</p>
            </CartItems>
            <Divider />
          </Fragment>
        ))}
      </Content>

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
