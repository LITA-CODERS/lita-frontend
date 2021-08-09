import Image from 'next/image';
import Link from 'next/link'
import fotoDestaque from '../public/fotocapa.png';
import sobreLita from '../public/sobrelita.png';
import aChef from '../public/achef.png';
import MainGrid from '../src/components/MainGrid';
import Carrossel from '../src/components/Carrossel';
import Box from '../src/components/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer';
 

export default function Home() {
  return (

    <MainGrid>
         
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      
        
       <Navbar />

        <div className='fotoDestaque' style={{ fotoDestaque }}>
         <Image src={fotoDestaque} alt="Foto Destaque" unsized='true' />
        </div>

        <Box>
         <h1 id='sobre' className='title'> Sobre a Litá </h1>
        </Box>

          <Box>
            <div className='sobreLita' style={{ sobreLita }} >
               <Box>
                <Image src={sobreLita} alt="Sobre a Litá" unsized='true' />
              </Box>
               <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
               </Box>

            </div>
          </Box>
       
        <div id='cardapio' className='cardapio' style={{ gridArea: 'cardapio'}} >
          <Box>
            <h1 className='title'> Cardápio </h1>
          </Box>
        </div>
       
        <Box>
          <Carrossel></Carrossel>
        </Box>

        <Box>
          <h1 id='achef' className='title'> A Cozinheira </h1>
        </Box>

        <div className='aChef' style={{ gridArea: 'aChef'}} >
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Box>

          <Box>
            <Image src={aChef} alt="A Chef" unsized='true' />
          </Box>
       </div>

      <Footer>
      </Footer>

    </MainGrid>
  )
};
