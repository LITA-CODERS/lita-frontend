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

    .title { 
      font-family: "Work Sans";
      font-weight: bold;
      color: #441026;
      font-size: 42px;
    }

    #__next {
      margin: 0;
      padding: 0;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      justify-content: center;
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
