import { ButtonIcon } from 'components/Button/ButtonIcon';
import { PokemonContext } from 'hooks/pokemonContext';
import { useContext } from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { Container, Heading, SubHeading, Body } from './styles';
import { constants } from 'utils';

export const Modal = ({ isOpen, onRequestClose, className }) => {
  const { currentPokemon } = useContext(PokemonContext);
  const { image, name, price, weight, height, id } = currentPokemon;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react__modal__overlay"
      className={className}
      ariaHideApp={false}
    >
      <Container>
        <Heading>{name}</Heading>
        <SubHeading>{price}</SubHeading>

        <img src={image} alt={`Pokemon ${name}`} />

        <Body>
          <div>
            <p>
              <strong>Peso:</strong> {weight}kg
            </p>
            <p>
              <strong>Altura:</strong> {height}m
            </p>
          </div>
          <div>
            <p>
              <strong>Id:</strong> {id}
            </p>
            <p>
              <strong>Tipo:</strong> {constants.TRANSLATED_TYPE}
            </p>
          </div>
        </Body>
      </Container>

      <ButtonIcon onClick={onRequestClose} Icon={CloseIcon} />
    </ReactModal>
  );
};
