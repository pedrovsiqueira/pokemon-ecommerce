import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { Container } from './styles';

export const Input = ({ name, placeholder, onChange, value }) => (
  <Container className={`search-field`}>
    <SearchIcon className="search-field-icon" />
    <input
      value={value}
      type="search"
      name={name}
      className={`field__input search-field__input`}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Container>
);
