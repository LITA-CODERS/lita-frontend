import styled from "styled-components";


const MainGrid = styled.main`
  margin-top: 200x;
  margin-left: 0px;
  margin-right: 0px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: space-around;
  
  .fotoDestaque {
    display: flex;
    max-width: vmax;
    justify-content: center;
    align-items: center;
    justify-items: center;

    @media(min-width: 640px){
      display: flex;
      max-width: vmax;
      justify-content: center;
      align-items: center;
      justify-items: center;
    }
  }

  .sobreLita {
    
    @media(min-width: 1007px) { 
     display: grid;
     max-width: vmax;
     justify-content: center;
     grid-template-columns: 1fr 1fr;
     font-family: 'Roboto'
     background-color: #F9E2D2;
    }
      
    @media(min-width: 640px) {
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