import { Nav, Content, CartDetails } from './styles';
import { Input } from 'components/Input/Input';
import { useContext } from 'react';

import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { ReactComponent as CartFilledIcon } from 'assets/cart-fill.svg';

import assets from 'assets';
import { Cart } from 'components/Cart/Cart';
import { PokemonContext } from 'hooks/pokemonContext';

export const Navbar = ({ search, handleSearch }) => {
  const { cartItems, setOpenCart } = useContext(PokemonContext);

  return (
    <Nav>
      <Content>
        <img src={assets.shop} alt="Shop Title" />
        <Input value={search} placeholder="Digite o que está procurando" onChange={handleSearch} />
        <div>
          {cartItems.length ? (
            <CartDetails>
              <CartFilledIcon
                title="Carrinho Preenchido"
                color="#FFF"
                height={30}
                onClick={() => setOpenCart(prevState => !prevState)}
              />
              <span>{cartItems.length}</span>
            </CartDetails>
          ) : (
            <CartIcon
              title="Carrinho Vazio"
              color="#FFF"
              height={30}
              onClick={() => setOpenCart(prevState => !prevState)}
            />
          )}
        </div>

        <Cart />
      </Content>
    </Nav>
  );
};
