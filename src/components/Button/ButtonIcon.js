export const ButtonIcon = ({ Icon, onClick, className, ...rest }) => (
  <button {...rest} aria-label="Icon Button" type="button" onClick={onClick} className={className}>
    <Icon data-testid="button-svg" />
  </button>
);
