import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BoxCardapioStyle from './BoxCardapioStyle';
import CardStyle from './CardStyle';
import Image from 'next/image';
import fotocapa from '../../../public/fotocapa.png'
import TituloCategoria from './CardStyle'

const TabsCardapio = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
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
            onClick={() => { toggle('1'); }}
          >
            Pratos
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })} className={'button'}
            onClick={() => { toggle('2'); }}
          >
            Salgados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })} className={'button'}
            onClick={() => { toggle('3'); }}
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