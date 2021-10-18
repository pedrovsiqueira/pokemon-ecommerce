import { Nav, Content, CartDetails } from './styles';
import { Input } from 'components/Input/Input';

import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { ReactComponent as CartFilledIcon } from 'assets/cart-fill.svg';

import assets from 'assets';
import { Cart } from 'components/Cart/Cart';
import { usePokemon } from 'hooks/pokemonContext';
import { useCart } from 'hooks/cartContext';

export const Navbar = () => {
  const { search, setSearch } = usePokemon();
  const { cartItems, setOpenCart } = useCart();

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <Nav>
      <Content>
        <img src={assets.shop} alt="Shop Title" />
        <Input value={search} placeholder="Digite o que está procurando" onChange={handleSearch} />
        <div>
          {cartItems.length ? (
            <CartDetails
              data-testid="navbar-cart"
              onClick={() => setOpenCart(prevState => !prevState)}
            >
              <CartFilledIcon title="Carrinho Preenchido" color="#FFF" height={30} />
              <span>{cartItems.length}</span>
            </CartDetails>
          ) : (
            <CartIcon
              data-testid="navbar-empty-cart"
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
