import styled from 'styled-components';

const CardStyle = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 130px 200px;
	justify-content: center;
	height: 100vh;
	width: 90vw;
	left: 100px;
	top: 756px;
	border-radius: 10px;
	background-color: #fff0e5;
	box-shadow: 0px 10px 25px 1px #864d5f2b;

	.tituloCategoria {
		font-family: "Work Sans";
		font-weight: 500;
		font-size: 40px;
		text-align: center;
		color: #441026;
		margin: 20px 0px 0px 0px;
		justify-content: center;
	}

	.gridPratos {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		justify-content: space-between;
		column-gap: 500px;
		color: #441026;
		margin: 30px 0 0 0;
	}

	.listaPratos {
		font-family: "Work Sans";
		font-weight: bold;
		font-size: 20px;
	}

	.listaPrecos {
		font-family: "Roboto";
		font-weight: bold;
		font-size: 25px;
	}
	.dish {
		font-size: 36px;
		line-height: 26px;
		padding: 4px 0;
	}
`;

export default CardStyle;