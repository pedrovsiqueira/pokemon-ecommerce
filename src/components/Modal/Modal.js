import { ButtonIcon } from 'components/Button/ButtonIcon';
import { PokemonContext } from 'hooks/pokemonContext';
import { theme } from 'utils';
import { useContext } from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { FallbackLoader } from 'FallbackLoader/FallbackLoader';

export const Modal = ({ isOpen, onRequestClose, className, children }) => {
  const { loading } = useContext(PokemonContext);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react__modal__overlay"
      className={className}
      ariaHideApp={false}
    >
      {children}
      <ButtonIcon onClick={onRequestClose} Icon={CloseIcon} className="btn--close-modal" />

      <FallbackLoader visible={loading} color={theme.colors.textColor} />
    </ReactModal>
  );
};
