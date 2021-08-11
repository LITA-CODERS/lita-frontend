import styled from 'styled-components';

const BoxCardapioStyle = styled.div` { 

    display: grid;
    justify-items: center;
    margin: 20px 5px 5px 5px;
    justify-content: center;


    .tituloCardapio{
        margin: 5px 50px 20px 5px;
    }

    .imagemCardapio{
        margin: auto auto auto auto;
        width: 100vw;
        height: 500px;
    }

    .button {
        font-family: "Work Sans";
        font-weight: bold;
        text-align: center;
        color: #000000;
        text-decoration: none;
        background-color: #FFFFFF;
        border-radius: 30px 30px 0px 0px;
        height: 48px;
        width: 223px;
        left: 569px;
        top: 641px;
    
};

    .button:hover {
        font-family: "Work Sans";
        font-weight: 500;
        color: #FFFFFF;
        text-decoration: none;
        background-color: #864D5F;
        border-radius-top: 10px;
    
};  

    .button:onClick {
        font-family: "Work Sans";
        font-weight: 500;
        color: #FFFFFF;
        text-decoration: none;
        background-color: #864D5F;
        border-radius-top: 10px;
    }

`;

export default BoxCardapioStyle;
