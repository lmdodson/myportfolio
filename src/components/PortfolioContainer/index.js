import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import Ascension from '../PortfolioCards/Ascension/index';
import TGR from '../PortfolioCards/TGR/index';
import Clicky from '../PortfolioCards/ClickyGame/index';
import Burgerized from '../PortfolioCards/Burgerized/index';
import WordGuess from '../PortfolioCards/WordGuess/index';

import "./style.css";
const PortfolioContainer = () => {
return (
  <div id='portfolioContainer'>
    <Container id='cardContainer'>
      <Row xs='1' sm='2' md='3'>
        <Col>
          <Ascension />
        </Col>
        <Col>
          <Burgerized />
        </Col>
        <Col>
          <TGR />
        </Col>
      </Row>
    </Container>
    <Container id='cardContainer'>
      <Row xs='1' sm='2' md='3'>
        <Col>
          <Clicky />
        </Col>
        <Col sm='4'>
          <WordGuess />
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default PortfolioContainer;