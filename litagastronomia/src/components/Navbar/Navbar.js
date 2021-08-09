import { MenuItems } from './MenuItems.js';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import NavbarStyle from './NavbarStyle'

const Navbar = () => {

  return (

          <NavbarStyle>
          <nav className='NavbarItems'>
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
          </NavbarStyle>

  )}

export default Navbar;