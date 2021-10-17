const { render } = require('@testing-library/react');
const { Divider } = require('components/Divider/Divider');

test('Should render Divider without crashing', () => {
  render(<Divider />);
});
