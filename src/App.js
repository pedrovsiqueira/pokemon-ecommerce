import { theme, constants } from 'utils';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/Home/Home';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = constants.NAME;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
