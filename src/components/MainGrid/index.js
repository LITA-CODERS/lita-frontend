import styled from "styled-components";


const MainGrid = styled.main`

    
margin-top: 200px;
    margin-left: 35px;
    margin-right: 35px;
    max-width: vmax;
    padding: 1px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: space-around;
  
  .fotoDestaque {
    display: grid;
    max-width: vmax;
    padding: 10px;
    justify-content: center;
    align-items: center;
    justify-items: center;

  }
  .sobreLita {
    
    @media(min-width: 1007px) { 
     display: grid;
     max-width: vmax;
     padding: 10px;
     justify-content: center;
     grid-template-columns: 1fr 1fr;
     font-family: 'Roboto'
    }
      
    @media(min-width: 640px){
      <BoxMobile>
      display: flex;
      max-width: vmax;
      padding: 10px;
      justify-content: center;
      font-family: 'Roboto'
      </BoxMobile>
      }
  }

  .cardapio {
    display: grid;
    max-width: vmax;
    padding: 10px;
    justify-content: center;
  }

  .aChef {
    @media(min-width: 1080px) { 
     display: grid;
     max-width: vmax;
     padding: 10px;
     justify-content: center;
     grid-template-columns: 1fr 1fr;

    @media(min-width: 860px){
      <BoxMobile>
      display: flex;
      max-width: vmax;
      padding: 10px;
      justify-content: center;
      font-family: 'Roboto'
      <BoxMobile>
      }
  }
`;

export default MainGrid;