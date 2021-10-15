import Loader from 'react-loader-spinner';
import { Container } from './styles';

export const FallbackLoader = ({ color, visible }) => (
  <Container style={{ height: 525 }}>
    <Loader type="Oval" color={color} height={100} width={100} visible={visible} />
  </Container>
);
