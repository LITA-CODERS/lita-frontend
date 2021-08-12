import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/index.js";
import BoxCardapio from "./TabsCardapio.js";


const GridCardapio = () => {

    return (

        <>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            
        

        <div className="Cardapio">

          <BoxCardapio />
        
        </div>

        </>

    )
}

export default GridCardapio;