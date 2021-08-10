import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BoxCardapioStyle from './BoxCardapioStyle';
import CardStyle from './CardStyle';

const BoxCardapio = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    
    <div>
        <BoxCardapioStyle>
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
          <BoxCardapioStyle>
          <Row>
            <Col sm="12">
            <h4>imagem</h4>
            <CardStyle>
            <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
              </CardStyle>
            </Col>
          </Row>
          </BoxCardapioStyle>
        </TabPane>
        <TabPane tabId="2">
        </TabPane>
      </TabContent>
      </BoxCardapioStyle>
    </div>
   
  );
}

export default BoxCardapio;