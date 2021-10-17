import { render } from '@testing-library/react';
import { theme } from 'utils';
import { FallbackLoader } from 'components/FallbackLoader/FallbackLoader';

const FallbackLoaderComponent = () => (
  <FallbackLoader color={theme.colors.textColor} visible={true} />
);

test('Should render FallbackLoader without crashing', () => {
  render(<FallbackLoaderComponent />);
});

test('Should render Loader svg correctly', () => {
  const { container } = render(<FallbackLoaderComponent />);
  const loaderElement = container.querySelector('svg');

  expect(loaderElement).toBeInTheDocument();
});
