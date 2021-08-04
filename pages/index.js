import Image from 'next/image';
import fotoDestaque from '../public/fotocapa.png';
import sobreLita from '../public/sobrelita.png';
import aChef from '../public/achef.png';
import MainGrid from '../src/components/MainGrid';
import Carrossel from '../src/components/Carrossel';
import Box from '../src/components/Box';


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

       <Carrossel>
         inserir carrossel
       </Carrossel>

       </div>

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
