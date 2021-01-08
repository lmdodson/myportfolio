import React from 'react';
import {CardDeck } from 'reactstrap';

import Ascension from '../PortfolioCards/Ascension/index';
import TGR from '../PortfolioCards/TGR/index';
import Clicky from '../PortfolioCards/ClickyGame/index';
import Burgerized from '../PortfolioCards/Burgerized/index';

import "./style.css";
const PortfolioContainer = () => {
return (
  <div id='portfolioContainer'>
    <CardDeck id='cardContainer'>
      <Ascension />
      <Burgerized />
      <TGR />
      <Clicky />
    </CardDeck>
    </div>
  );
};
export default PortfolioContainer;