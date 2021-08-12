import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BoxCardapioStyle from './BoxCardapioStyle';
import CardStyle from './CardStyle';
import Image from 'next/image';
import fotocapa from '../../../public/fotocapa.png';
import pratos from '../../../public/pratos.png';
import salgados from '../../../public/salgados.png';
import salgadosfesta from '../../../public/salgadosfesta.png';
import doces from '../../../public/doces.png';
import diversos from '../../../public/diversos.png';
import paes from '../../../public/paes.png';
import TituloCategoria from './CardStyle'
import { api } from '../../services/api';
import { toast } from 'react-toastify';

const TabsCardapio = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const [dishes, SetDishes] = useState([])

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const dishesData = async (id) => {
    try {
			const response = await api.get(`/categories/${id}`);
				SetDishes(response.data.result);
				toast.success("Busca feita com sucesso");
    } catch (error) {
      toast.error(`Erro ao buscar os pratos ${error}`)
    }
  
	}
  return (
		<div>
			<BoxCardapioStyle>
				<div className="tituloCardapio">
					<h1 className="titleCardapio" align="center">
						{" "}
						Cardápio
					</h1>
				</div>

				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "1" })}
							className={"button"}
							onClick={() => {
								dishesData("0efdc46f-57b9-47e8-9537-1abfebfd9221");
								toggle("1");
							}}>
							Pratos
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "2" })}
							className={"button"}
							onClick={() => {
								dishesData("256f279d-dbbc-4cc6-8b88-d3b846ee8080");
								toggle("2");
							}}>
							Salgados
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "3" })}
							className={"button"}
							onClick={() => {
								dishesData("b331b0c4-49b2-45e2-87db-6234ad4c474e");
								toggle("3");
							}}>
							Salgados Festa
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "4" })}
							className={"button"}
							onClick={() => {
								dishesData("aabfb094-5a16-4b80-805e-d9fdad8454c2");
								toggle("4");
							}}>
							Doces
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "5" })}
							className={"button"}
							onClick={() => {
								dishesData("209d425f-f458-4713-b3b6-ff27685bf781");
								toggle("5");
							}}>
							Diversos
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "6" })}
							className={"button"}
							onClick={() => {
								dishesData("d6384cb6-98d8-46a0-b684-9ce409335ccb");
								toggle("6");
							}}>
							Pães
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={activeTab}>
					<TabPane tabId="1">
						<imagemCardapio>
							<Image src={pratos} alt="Pratos" unsized="true" />
						</imagemCardapio>
						<BoxCardapioStyle>
							<Row>
								<Col sm="12">
									<CardStyle>
										<div className="tituloCategoria">Pratos</div>
										<div className="gridPratos">
											<div className="listaPratos">
												{dishes.map(i => {
													return <p class="dish">{i.name}</p>;
												})}
											</div>
											<div className="listaPrecos">
												{dishes.map(i => {
													return <p class="dish">R$ {i.price}</p>;
												})}
											</div>
										</div>
										;
									</CardStyle>
								</Col>
							</Row>
						</BoxCardapioStyle>
					</TabPane>

					<TabPane tabId="2">
						<imagemCardapio>
							<Image src={salgados} alt="Salgados" unsized="true" />
						</imagemCardapio>
						<BoxCardapioStyle>
							<Row>
								<Col sm="12">
									<CardStyle>
										<div className="tituloCategoria">Salgados</div>
										<div className="gridPratos">
											<div className="listaPratos">
												{dishes.map(i => {
													return <p class="dish">{i.name}</p>;
												})}
											</div>
											<div className="listaPrecos">
												{dishes.map(i => {
													return <p class="dish">R$ {i.price}</p>;
												})}
											</div>
										</div>
										;
									</CardStyle>
								</Col>
							</Row>
						</BoxCardapioStyle>
					</TabPane>

					<TabPane tabId="3">
						<imagemCardapio>
							<Image src={salgadosfesta} alt="Salgados Festa" unsized="true" />
						</imagemCardapio>
						<BoxCardapioStyle>
							<Row>
								<Col sm="12">
									<CardStyle>
										<div className="tituloCategoria">Salgados de Festa</div>
										<div className="gridPratos">
											<div className="listaPratos">
												{dishes.map(i => {
													return <p class="dish">{i.name}</p>;
												})}
											</div>
											<div className="listaPrecos">
												{dishes.map(i => {
													return <p class="dish">R$ {i.price}</p>;
												})}
											</div>
										</div>
										;
									</CardStyle>
								</Col>
							</Row>
						</BoxCardapioStyle>
					</TabPane>

					<TabPane tabId="4">
						<imagemCardapio>
							<Image src={doces} alt="Doces" unsized="true" />
						</imagemCardapio>
						<BoxCardapioStyle>
							<Row>
								<Col sm="12">
									<CardStyle>
										<div className="tituloCategoria">Doces</div>
										<div className="gridPratos">
											<div className="listaPratos">
												{dishes.map(i => {
													return <p class="dish">{i.name}</p>;
												})}
											</div>
											<div className="listaPrecos">
												{dishes.map(i => {
													return <p class="dish">R$ {i.price}</p>;
												})}
											</div>
										</div>
										;
									</CardStyle>
								</Col>
							</Row>
						</BoxCardapioStyle>
					</TabPane>

					<TabPane tabId="5">
						<imagemCardapio>
							<Image src={diversos} alt="Diversos" unsized="true" />
						</imagemCardapio>
						<BoxCardapioStyle>
							<Row>
								<Col sm="12">
									<CardStyle>
										<div className="tituloCategoria">Diversos</div>
										<div className="gridPratos">
											<div className="listaPratos">
												{dishes.map(i => {
													return <p class="dish">{i.name}</p>;
												})}
											</div>
											<div className="listaPrecos">
												{dishes.map(i => {
													return <p class="dish">R$ {i.price}</p>;
												})}
											</div>
										</div>
										;
									</CardStyle>
								</Col>
							</Row>
						</BoxCardapioStyle>
					</TabPane>

					<TabPane tabId="6">
						<imagemCardapio>
							<Image src={paes} alt="Pães" unsized="true" />
						</imagemCardapio>
						<BoxCardapioStyle>
							<Row>
								<Col sm="12">
									<CardStyle>
										<div className="tituloCategoria">Pães</div>
										<div className="gridPratos">
											<div className="listaPratos">
												{dishes.map(i => {
													return <p class="dish">{i.name}</p>;
												})}
											</div>
											<div className="listaPrecos">
												{dishes.map(i => {
													return <p class="dish">R$ {i.price}</p>;
												})}
											</div>
										</div>
										;
									</CardStyle>
								</Col>
							</Row>
						</BoxCardapioStyle>
					</TabPane>
				</TabContent>
			</BoxCardapioStyle>
		</div>
	);
}

export default TabsCardapio;