import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// import Header from './components/Header.tsx'; Exemplos de Styled
/*
  { Exemplos de uso de Styled } 
  <Header variantColor='secondary' />
  <Header />
  <Header variantColor='warning' />
  <Header variantColor='primary' />
*/
import { defaultTheme } from './styles/theme/default.ts';
import { GlobalStyle } from './styles/global.ts';

import Router from './Router.tsx';

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
