import { Nav, Content } from './styles';
import { ReactComponent as CartIcon } from 'assets/cart.svg';
import assets from 'assets';
import { Input } from 'components/Input/Input';

export const Navbar = ({ search, handleSearch }) => (
  <Nav>
    <Content>
      <a href="/">
        <img src={assets.shop} alt="Shop Title" />
      </a>
      <Input value={search} placeholder="Digite o que está procurando" onChange={handleSearch} />
      <div>
        <a href="test">
          <p>Pedidos</p>
        </a>
        <CartIcon color="#fff" height={23} />
      </div>
    </Content>
  </Nav>
);
