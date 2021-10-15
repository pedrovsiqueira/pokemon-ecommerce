export const ButtonIcon = ({ Icon, onClick, className }) => (
  <button aria-label="Icon Button" type="button" onClick={onClick} className={className}>
    <Icon />
  </button>
);
