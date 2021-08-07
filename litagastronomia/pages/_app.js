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

  // .NavbarItems {  
  //   margin-top: 20px;
  //   margin-bottom: 10px;
  //   background-color: #F9E2D2CC;
  //   height: 90px;
  //   border-radius: 25px;
  //   drop-shadow: 10px 0px 25px 0px #A9816580;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 1.5rem;
  //   font-family: "Work Sans";
  //   font-weight: bold;
  //   align-content: space-between;
  // }

  // .navbar-logo {
  //   justify-self: start;
  //   margin-left: 20px;
  //   cursor: pointer;
  //   padding: 20px;
  // }

  // .nav-menu {
  //   display: grid;
  //   grid-template-columns: repeat(5, auto);
  //   grid-gap: 20px;
  //   list-style: none;
  //   text-align: center;
  //   text-decoration: none;
  //   width: maxvw;
  //   justify-content: end;
  // }

  // .nav-links {
  //   color: #441328;
  //   text-decoration: none;
  //   padding: 0.3rem 0.3rem;
  // }

  // .nav-links:hover {
  //   color: #864D5F;
  //   text-decoration: none;
  //   padding: 0.5rem 0.5rem;
  // }
  
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
