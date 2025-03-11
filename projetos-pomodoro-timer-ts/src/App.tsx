import { ThemeProvider } from 'styled-components';
// import Header from './components/Header.tsx'; Exemplos de Styled

import { defaultTheme } from './styles/theme/default.ts';

import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {/* <Header variantColor='secondary' />
        <Header />
        <Header variantColor='warning' />
        <Header variantColor='primary' /> */}
        {/* Exemplos de uso de Styled */}
        <h1>Hey</h1>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
