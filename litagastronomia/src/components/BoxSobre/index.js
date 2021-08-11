import styled from 'styled-components';

const Box = styled.div` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 10px;
  background-color: #F9E2D2;
  border-radius: 8px;
  max-width: vmax;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: space-around;
  padding: 15px;

  @media(max-width: 1004px) {
    background-color: #FBF5F1;


`;

export default Box;