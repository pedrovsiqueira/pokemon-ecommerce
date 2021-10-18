import { ButtonIcon } from 'components/Button/ButtonIcon';
import { usePokemon } from 'hooks/pokemonContext';
import { theme } from 'utils';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { FallbackLoader } from 'components/FallbackLoader/FallbackLoader';

export const Modal = ({ isOpen, onRequestClose, className, children }) => {
  const { loading } = usePokemon();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react__modal__overlay"
      className={className}
      ariaHideApp={false}
    >
      {children}
      <ButtonIcon
        data-testid="modal-close-btn"
        onClick={onRequestClose}
        Icon={CloseIcon}
        className="btn--close-modal"
      />

      <FallbackLoader visible={loading} color={theme.colors.textColor} />
    </ReactModal>
  );
};
