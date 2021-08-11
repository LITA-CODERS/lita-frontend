import Image from 'next/image';
import whatsapp from '../../../public/whatsapp.png';
import goomer from '../../../public/goomer.png';
import instagram from '../../../public/instagram.png';
import logofooter from '../../../public/logofooter.png';
import FooterStyle from './FooterStyle.js';
import Box from '../Box';

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
                <Image src={whatsapp} alt="Whatsapp" unsized='true' />
                <Image src={goomer} alt="Goomer" unsized='true' />
            </div> 

            <div className='barraFooter'>

            <div className='logoFooter'>
             <div>
                <Image src={logofooter} alt="Logo Litá Footer" unsized='true' />
             </div>
            </div>
         
            <div className='textoFooter'>
             Siga a Litá no Instagram
            
                <div className="logoInsta">
                 <Image src={instagram} alt="Instagram" width={50} height={50} />
                </div>
                
             </div>
         </div>
        </FooterStyle>

    )};

export default Footer;