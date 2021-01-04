import React from 'react';
import { Row, Col } from 'reactstrap';

import Ascension from '../PortfolioCards/Ascension/index';
import TGR from '../PortfolioCards/TGR/index';
import Clicky from '../PortfolioCards/ClickyGame/index';
import Burgerized from '../PortfolioCards/Burgerized/index';

import "./style.css";
const PortfolioContainer = () => {
  return (
    <div id='portfolioContainer'>
      <Row id='cardContainer'>
        <Col xs="4" sm="3">
          
          <Ascension />
        </Col>
        <Col xs="4" sm="3">
          <TGR />
        </Col>
        <Col xs="4" sm="3">
          <Clicky />
        </Col>
        <Col xs="4" sm="3">
          <Burgerized />
        </Col>
      </Row>
      {/*
      <Row id='cardContainer'>
        <Col xs="4" sm="3">
          <Burgerized />
        </Col>
        <Col xs="4" sm="3">
          <TGR />
        </Col>
        <Col xs="4" sm="3">
          <Clicky />
        </Col>
      </Row>
      */}
      
    </div>

  );
};
export default PortfolioContainer;