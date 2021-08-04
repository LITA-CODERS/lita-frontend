import Image from 'next/image';
import fotoDestaque from '../public/fotocapa.png';
import sobreLita from '../public/sobrelita.png';
import aChef from '../public/achef.png';
import MainGrid from '../src/components/MainGrid';
import Carrossel from '../src/components/Carrossel';
import Box from '../src/components/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


// function CardapioPratos() {
//   return(

//   )
// }


// const Header = styled.header`
//   position: absolute;
//   width: 1440px;
//   height: 126px;
//   left: 0px;
//   top: 0px;
//   background: rgba(249, 226, 210, 0.8);
//   box-shadow: 10px 0px 25px rgba(169, 129, 101, 0.5);
//   `;


  

export default function Home() {
  return (
  
    <MainGrid>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link> */}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Work+Sans:ital,wght@0,400;0,500;1,700&display=swap" rel="stylesheet"></link>
       
      <div className='fotoDestaque' style={{ gridArea: 'fotoDestaque'}} >
      <Box> 
      <Image src={fotoDestaque} alt="Foto Destaque" width={1440} height={537} />
      </Box>
       </div>

       <Box>
       Sobre a Litá
       </Box>

       <div className='sobreLita' style={{ gridArea: 'sobreLita'}} >
       <Box>
         <Image src={sobreLita} alt="Sobre a Litá" unsized />
       </Box>  

       <Box>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Box>     
       </div>

       <div className='cardapio' style={{ gridArea: 'cardapio'}} >
       <Box>
         Cardápio
       </Box>
      </div>
       
       <Box>
      <Carrossel>
      </Carrossel>
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
       <Image src={aChef} alt="A Chef" unsized />
       </Box>
       </div>

    </MainGrid>
  )
};
