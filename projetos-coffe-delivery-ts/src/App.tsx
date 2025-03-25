import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.tsx';
import { GlobalStyle } from './styles/global.ts';
import { ItensContextProvider } from './context/ItensContext.tsx';


function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ItensContextProvider>
            <Router />
          </ItensContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
