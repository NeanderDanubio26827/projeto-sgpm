import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'

// Adicione a fonte "Roboto" ao tema estendido
const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  styles: {
    global: {
      // Adicione o link da fonte "Roboto" aqui
      "@font-face": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        src: "url(https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap)",
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
