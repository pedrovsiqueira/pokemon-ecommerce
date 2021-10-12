import { constants, theme } from 'utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 style={{ color: theme.colors.primary }}>{constants.TITLE}</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
