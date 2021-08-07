import styled from 'styled-components';

const Navbar = styled.nav`

    margin-top: 20px;
    margin-left: 0px;
    margin-bottom: 10px;
    background-color: #F9E2D2CC;
    height: 90px;
    border-radius: 0px;
    drop-shadow(10px 0px 25px 0px #A9816580);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    .NavbarItems {  
        margin-top: 20px;
        margin-bottom: 10px;
        background-color: #F9E2D2CC;
        height: 90px;
        border-radius: 25px;
        drop-shadow: 10px 0px 25px 0px #A9816580;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-family: "Work Sans";
        font-weight: bold;
        align-content: space-between;
      }
    
      .navbar-logo {
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        padding: 20px;
      }
    
      .nav-menu {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 20px;
        list-style: none;
        text-align: center;
        text-decoration: none;
        width: maxvw;
        justify-content: end;
      }
    
      .nav-links {
        color: #441328;
        text-decoration: none;
        padding: 0.3rem 0.3rem;
      }
    
      .nav-links:hover {
        color: #864D5F;
        text-decoration: none;
        padding: 0.3rem 0.3rem;
      }    

    @media screen and (max-width: 1248px) {
        .NavbarItems {
            position: absolute;
            
        }

        .nav-menu{
            display: none;
            flex-direction: column;
            width: 100%;
            height: 500px;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 100%;
            transition: all 0.5s ease;

        }
    }
    
`;

export default Navbar;