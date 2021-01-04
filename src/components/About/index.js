import React from 'react';
import { Container } from 'reactstrap';
import "./style.css";
import RotatingText from "../RotatingText/index";
const About = () => {
  return (
    <div>
      <Container fluid>
        <p id="about">I'm a  <RotatingText /></p>
      </Container>
  </div>

  );
};

export default About;