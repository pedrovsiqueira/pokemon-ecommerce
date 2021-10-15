import { theme, constants } from 'utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/Home/Home';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';
import AppProvider from 'hooks';

function App() {
  useEffect(() => {
    document.title = constants.NAME;
  }, []);

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
