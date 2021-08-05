import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   body {
    font-family: 'Roboto';
    background-color: #F9E2D2;
  }

    #__next {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
  }

  .img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
