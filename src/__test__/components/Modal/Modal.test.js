import { render } from '@testing-library/react';
import { Modal } from 'components/Modal/Modal';
import AppProvider from 'hooks';

const ModalComponent = ({ isOpen, onRequestClose, className, children }) => (
  <AppProvider>
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={className}>
      {children}
    </Modal>
  </AppProvider>
);

test('Should render Modal without crashing', () => {
  render(<ModalComponent />);
});
