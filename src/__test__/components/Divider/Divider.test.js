import { render } from '@testing-library/react';
import { Divider } from 'components/Divider/Divider';

test('Should render Divider without crashing', () => {
  render(<Divider />);
});
