import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ButtonIcon } from 'components/Button/ButtonIcon';

const MockIcon = props => <svg {...props}></svg>;

test('Should render Button Icon without crashing', () => {
  render(<ButtonIcon Icon={MockIcon} />);
});

test('Should render button correctly', () => {
  render(<ButtonIcon Icon={MockIcon} />);

  expect(screen.getByTestId('button-svg')).toBeInTheDocument();
});

test('Should call onClick if button is clicked', () => {
  const handleClickMock = jest.fn();
  render(<ButtonIcon onClick={handleClickMock} Icon={MockIcon} />);
  user.click(screen.getByTestId('button-svg'));
  expect(handleClickMock).toHaveBeenCalled();
});
