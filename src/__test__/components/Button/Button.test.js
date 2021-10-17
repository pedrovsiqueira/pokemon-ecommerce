import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Button } from '../../../components/Button/Button';

test('Should render Button without crashing', () => {
  render(<Button>Meu botão</Button>);
});

test('Should render children correctly', () => {
  render(<Button>Meu botão</Button>);

  expect(screen.getByText(/meu botão/i)).toBeInTheDocument();
});

test('Should have a disabled prop', () => {
  render(<Button disabled={true}>Meu botão</Button>);

  expect(screen.getByText(/meu botão/i)).toBeDisabled();
});

test('Should call onClick if button is clicked', () => {
  const handleClickMock = jest.fn();
  render(<Button onClick={handleClickMock}>Meu botão</Button>);
  user.click(screen.getByText(/meu botão/i));

  expect(handleClickMock).toHaveBeenCalled();
});
