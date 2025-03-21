import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.tsx';
import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
