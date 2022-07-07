// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "@fontsource/anek-latin";
import "@fontsource/roboto"
import Layout from '../components/Layout/Layout';

const theme = extendTheme({
  colors: {
    brand100: '#27AAE1',
    brand200: '#008BC6',
    brand300: '#027BAE',
    brand400: '#178FC1',
    accent: '#4FB983',
    paragraph100: '#B9B6B4',
    paragraph200: '#929292',
    paragraph300: '#5f5f5f',
    paragraph400: '#515151',
    siteBackground: '#F5F5F5',
    siteBackground2: '#F5F1EE'

  },
  fonts: {
    heading: 'Anek Latin',
    body: 'Roboto',
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp