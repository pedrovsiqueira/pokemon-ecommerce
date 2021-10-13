export const ButtonIcon = ({ Icon, onClick }) => (
  <button type="button" onClick={onClick} className="btn--close-modal">
    <Icon />
  </button>
);
