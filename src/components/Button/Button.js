import { StyledButton } from './styles';

export const Button = ({ children, type, onClick, backgroundColor, disabled }) => (
  <StyledButton
    disabled={disabled}
    type={type || 'button'}
    backgroundColor={backgroundColor}
    onClick={onClick || null}
  >
    {children}
  </StyledButton>
);
