import styled from "styled-components";

const FooterStyle = styled.div`

    .facaPedido {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 70px 250px 30px 250px;
        width: maxvw;
    }

    .barraFooter {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        height: 250px;
        width: maxvw;
        background-color: #441026;
        margin: 150px 0px 30px 0px;
        justify-content: start;
    }

    .textoFooter {
        display: flex;
        flex-direction: column;
        width: maxvw;
        color: white;
        margin: 30px 45px 25px 240px;
        text-align: center;
        font-family: "Work Sans";
        font-size: 30px;
        justify-content: center;
        align-items: center;
    }

    .logoInsta {
        display: flex;
        flex-direction: column;
        width: maxvw;
        color: white;
        margin: 12px 50px 25px 35px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .logoFooter {
        display: flex;
        flex-direction: column;
        margin-top: 55px;
        width: maxvw;
        justify-content: start;
        align-content: flex-start;
    }
}`

export default FooterStyle;