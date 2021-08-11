import Image from 'next/image';
import whatsapp from '../../../public/whatsapp.png';
import goomer from '../../../public/goomer.png';
import instagram from '../../../public/instagram.png';
import logofooter from '../../../public/logofooter.png';
import FooterStyle from './FooterStyle.js';
import Box from '../Box';
import Link from 'next/link';

const Footer = () => {

    return(

        <FooterStyle>

            <Box>
            <Box>
            <Box>
                <h1 id='contato' className='title'> Peça sua Refeição </h1>
            </Box>
            </Box>
            </Box>
        
            <div className='facaPedido'>
                <Link href={{ pathname: 'https://wa.me/5516988317850'}}> 
                <Image src={whatsapp} alt="Whatsapp" unsized='true' />
                </Link>
                <Link href={{ pathname: 'https://goomer.com.br/'}}> 
                <Image src={goomer} alt="Goomer" unsized='true' />
                </Link>
            </div> 

            <div className='barraFooter'>

            <div className='logoFooter'>
             <div>
                <Link href={{ pathname: '/'}}>
                 <Image src={logofooter} alt="Logo Litá Footer" unsized='true' />
                </Link>
             </div>
            </div>
         
            <div className='textoFooter'>
             Siga a Litá no Instagram
            
                <div className="logoInsta">
                    <Link href={{ pathname: 'https://www.instagram.com/lita.gastronomia/'}}>
                     <Image src={instagram} alt="Instagram" width={50} height={50} />
                    </Link>
                </div>
                
             </div>
         </div>
        </FooterStyle>

    )};

export default Footer;