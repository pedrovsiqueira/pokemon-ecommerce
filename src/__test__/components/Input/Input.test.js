import { render } from '@testing-library/react';
import { Input } from 'components/Input/Input';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils';

const InputComponent = ({ placeholder, onChange, value }) => (
  <ThemeProvider theme={theme}>
    <Input placeholder={placeholder} onChange={onChange} value={value} />
  </ThemeProvider>
);

const handleInputChange = jest.fn();

test('Should render Input without crashing', () => {
  render(
    <InputComponent
      value="pikachu"
      placeholder="Digite o que está procurando"
      onChange={handleInputChange}
    />
  );
});

test('Should render Input with placeholder', () => {
  const { getByPlaceholderText } = render(
    <InputComponent
      value="pikachu"
      placeholder="Digite o que está procurando"
      onChange={handleInputChange}
    />
  );

  expect(getByPlaceholderText('Digite o que está procurando')).toBeTruthy();
});

test('Should render Input with value', () => {
  const { container } = render(
    <InputComponent
      value="pikachu"
      placeholder="Digite o que está procurando"
      onChange={handleInputChange}
    />
  );

  const input = container.querySelector('input');

  expect(input.value).toBe('pikachu');
});
