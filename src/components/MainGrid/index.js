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
    display: grid;
    max-width: vmax;
    padding: 10px;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    font-family: 'Roboto'
  }

  .cardapio {
    display: grid;
    max-width: vmax;
    padding: 10px;
    justify-content: center;
  }

  .aChef {
    display: grid;
    max-width: vmax;
    padding: 10px;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }
`;

export default MainGrid;