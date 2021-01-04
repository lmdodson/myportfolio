import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";
import About from "../About/index";


const Jumbo = () => {
  return (
    <div>
    <Jumbotron fluid>
      <Container id='top' fluid>
        <h1 id='name'>Hi, I'm Leah!</h1>
        <About />
      </Container>
    </Jumbotron>
  </div>

  );
};

export default Jumbo;