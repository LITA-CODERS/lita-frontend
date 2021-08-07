import Image from 'next/image';
import fotoDestaque from '../public/fotocapa.png';
import sobreLita from '../public/sobrelita.png';
import aChef from '../public/achef.png';
import MainGrid from '../src/components/MainGrid';
import Carrossel from '../src/components/Carrossel';
import Box from '../src/components/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import BoxMobile from '../src/components/BoxMobile';
import logo from '../public/logo.png';
import { MenuItems } from '../src/components/Navbar/MenuItems';
import Navbar from '../src/components/Navbar/Navbar';
 

export default function Home() {
  return (

    <MainGrid>
         
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      
        
        <Navbar>
          <nav className="NavbarItems">
            <ul className='nav-menu'>
              <li>
                 <a className={ MenuItems[0].cName } href={ MenuItems[0].url }>
                   {MenuItems[0].title}
                 </a>
              </li>       
            </ul>
                
                <ul className='nav-menu'>
              <li>
                 <a className={ MenuItems[1].cName } href={ MenuItems[1].url }>
                   {MenuItems[1].title}
                 </a>
              </li>       
            </ul>   
            <div className="navbar-logo" ><Image src={logo} alt="Foto Destaque" unsized='true' /><i className="fab fa-react"></i></div>  
            <ul className='nav-menu'>
              <li>
                 <a className={ MenuItems[2].cName } href={ MenuItems[2].url }>
                   {MenuItems[2].title}
                 </a>
              </li>       
            </ul>
                <ul className='nav-menu'>
              <li>
                 <a className={ MenuItems[3].cName } href={ MenuItems[3].url }>
                   {MenuItems[3].title}
                 </a>
              </li>       
            </ul>   
          </nav>
        </Navbar>

      <div className='fotoDestaque' style={{ gridArea: 'fotoDestaque'}} >
      <Box> 
      <Image src={fotoDestaque} alt="Foto Destaque" width={1440} height={537} />
      </Box>
       </div>

       <Box>
       Sobre a Litá
       </Box>

       
       <div className='sobreLita' style={{ gridArea: 'sobreLita'}} >
       <BoxMobile>
         <Image src={sobreLita} alt="Sobre a Litá" unsized='true' />
       </BoxMobile>  

       <BoxMobile>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </BoxMobile>     
       </div>

       <div className='cardapio' style={{ gridArea: 'cardapio'}} >
       <Box>
         Cardápio
       </Box>
      </div>
       
       <Box>
      <Carrossel></Carrossel>
      
      </Box>

       <Box>
         A Cozinheira
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

    </MainGrid>
  )
};