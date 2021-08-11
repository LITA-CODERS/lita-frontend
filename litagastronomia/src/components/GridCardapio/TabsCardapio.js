import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BoxCardapioStyle from './BoxCardapioStyle';
import CardStyle from './CardStyle';
import Image from 'next/image';
import fotocapa from '../../../public/fotocapa.png'
import TituloCategoria from './CardStyle'
import { api } from '../../services/api';
import { Toast } from 'bootstrap';
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
				SetDishes(response.data);
				toast.success("Busca feita com sucesso");
    } catch (error) {
      toast.error(`Erro ao busca os pratos ${error}`)
    }
  
  }
  return (
    
    
    <div>

        <BoxCardapioStyle>
        <div className="tituloCardapio">
            <h1 className="titleCardapio" align="center"> Cardápio</h1>
        </div>
        
      <Nav tabs >
        <NavItem>
          <NavLink 
            className={classnames({ active: activeTab === '1' })} className={'button'}
              onClick={() => {
                dishesData("0efdc46f-57b9-47e8-9537-1abfebfd9221")
                toggle("1");;
              }}
          >
            Pratos
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })} className={'button'}
              onClick={() => {
                dishesData("256f279d-dbbc-4cc6-8b88-d3b846ee8080");
                toggle('2');
              }}
          >
            Salgados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })} className={'button'}
              onClick={() => {
                dishesData("b331b0c4-49b2-45e2-87db-6234ad4c474e")
                toggle('3');
              }}
          >
            Salgados Festa
            
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })} className={'button'}
            onClick={() => { toggle('4'); }}
          >
            Doces
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })} className={'button'}
            onClick={() => { toggle('5'); }}
          >
            Diversos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })} className={'button'}
            onClick={() => { toggle('6'); }}
          >
            Pães
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
           <imagemCardapio>
                <Image src={fotocapa} alt="Foto Destaque" unsized='true' />
            </imagemCardapio>
          <BoxCardapioStyle>
            <Row>
             <Col sm="12">
              <CardStyle>
                  <div className="tituloCategoria">Requisição Categoria ID</div>
                    <div className="gridPratos">
                      <div className="listaPratos">Requisição Pratos</div>
                      <div className="listaPrecos">Requisição Preços</div>
                    </div>
              </CardStyle>
            </Col>
          </Row>
          </BoxCardapioStyle>
        </TabPane>
        
        <TabPane tabId="2">
        <imagemCardapio>
                <Image src={fotocapa} alt="Foto Destaque" unsized='true' />
            </imagemCardapio>
          <BoxCardapioStyle>
            <Row>
             <Col sm="12">
              <CardStyle>
                  <div className="tituloCategoria">Requisição Categoria ID</div>
                    <div className="gridPratos">
                      <div className="listaPratos">Requisição Pratos</div>
                      <div className="listaPrecos">Requisição Preços</div>
                    </div>
              </CardStyle>
            </Col>
          </Row>
          </BoxCardapioStyle>
        </TabPane>

        <TabPane tabId="3">
        <imagemCardapio>
                <Image src={fotocapa} alt="Foto Destaque" unsized='true' />
            </imagemCardapio>
          <BoxCardapioStyle>
            <Row>
             <Col sm="12">
              <CardStyle>
                  <div className="tituloCategoria">Requisição Categoria ID</div>
                    <div className="gridPratos">
                      <div className="listaPratos">Requisição Pratos</div>
                      <div className="listaPrecos">Requisição Preços</div>
                    </div>
              </CardStyle>
            </Col>
          </Row>
          </BoxCardapioStyle>
        </TabPane>

        <TabPane tabId="4">
        <imagemCardapio>
                <Image src={fotocapa} alt="Foto Destaque" unsized='true' />
            </imagemCardapio>
          <BoxCardapioStyle>
            <Row>
             <Col sm="12">
              <CardStyle>
                  <div className="tituloCategoria">Requisição Categoria ID</div>
                    <div className="gridPratos">
                      <div className="listaPratos">Requisição Pratos</div>
                      <div className="listaPrecos">Requisição Preços</div>
                    </div>
              </CardStyle>
            </Col>
          </Row>
          </BoxCardapioStyle>
        </TabPane>

        <TabPane tabId="5">
        <imagemCardapio>
                <Image src={fotocapa} alt="Foto Destaque" unsized='true' />
            </imagemCardapio>
          <BoxCardapioStyle>
            <Row>
             <Col sm="12">
              <CardStyle>
                  <div className="tituloCategoria">Requisição Categoria ID</div>
                    <div className="gridPratos">
                      <div className="listaPratos">Requisição Pratos</div>
                      <div className="listaPrecos">Requisição Preços</div>
                    </div>
              </CardStyle>
            </Col>
          </Row>
          </BoxCardapioStyle>
        </TabPane>

        <TabPane tabId="6">
        <imagemCardapio>
                <Image src={fotocapa} alt="Foto Destaque" unsized='true' />
            </imagemCardapio>
          <BoxCardapioStyle>
            <Row>
             <Col sm="12">
              <CardStyle>
                  <div className="tituloCategoria">Requisição Categoria ID</div>
                    <div className="gridPratos">
                      <div className="listaPratos">Requisição Pratos</div>
                      <div className="listaPrecos">Requisição Preços</div>
                    </div>
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