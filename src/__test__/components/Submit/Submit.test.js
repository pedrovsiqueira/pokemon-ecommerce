import { render } from '@testing-library/react';
import { Submit } from 'components/Submit/Submit';
import checkoutGif from 'assets/checkout.gif';
import { formatPrice, generateCashback } from 'utils/helpers';

test('Should render Submit without crashing', () => {
  render(<Submit total={10} />);
});

test('Should display a pikachu gif', () => {
  const { container } = render(<Submit total={10} />);
  const checkoutImageSrc = `http://localhost/${checkoutGif}`;

  const imageElement = container.querySelector('img');

  expect(imageElement.src).toEqual(checkoutImageSrc);
});

test('Should display cart total price', () => {
  const total = 10;
  const { container } = render(<Submit total={total} />);

  const priceElement = container.querySelector('h2');
  expect(priceElement).toHaveTextContent(formatPrice(total));
});

test('Should calulate correct cashback', () => {
  const total = 10;
  const { container } = render(<Submit total={total} />);

  const cashbackElement = container.querySelector('h3');
  expect(cashbackElement).toHaveTextContent(generateCashback(total));
});
