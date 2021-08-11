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
        display: flex;
        flex-direction: columns;
        height: 250px;
        width: maxvw;
        background-color: #441026;
        margin: 150px 0px 30px 0px;
        justify-content: center;
    }

    .textoFooter {
        display: flex;
        flex-direction: column;
        width: maxvw;
        color: white;
        margin: 0px 30px 30px 30px;
        text-align: center;
        font-family: "Work Sans";
        font-size: 20px;
        justify-content: center;
        align-items: center;
    }

    .logoFooter {
        display: flex;
        flex-direction: column;
        width: maxvw;
        justify-content: start;
        align-content: flex-end;
    }
}`

export default FooterStyle;