export const ButtonIcon = ({ Icon, onClick, className }) => (
  <button type="button" onClick={onClick} className={className}>
    <Icon />
  </button>
);
