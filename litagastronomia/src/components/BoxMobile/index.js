import styled from 'styled-components';

const BoxMobile = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #F9E2D2;
    border-radius: 8px;
    max-width: vmax;
    margin-left: 20px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: space-around;
    padding: 15px;

    @media(max-width: 1004px) {
    background-color: #FBF5F1;
    border-radius: 8px;
    box-shadow: 0px 10px 25px 1px #864D5F2B;
    }
  `
;

export default BoxMobile