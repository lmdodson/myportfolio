import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';
import "./style.css";
const Clicky = () => {
  return (
    <Card className='d-flex'>
    <CardImg top width="100%" src={require('../../../assets/images/pug-jedi.jpg')} alt="pug dressed like jedi"/>
    <CardBody className='cardContainer'>
      <CardTitle tag="h5">Clicky Game</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Web-based Memory Game</CardSubtitle>
      <CardText>Clicky Game is a game designed to test your memory with rotating images. Click on the the images to score points!</CardText>
      <CardLink href="https://lmdodson.github.io/Clicky-Game/" target="_blank">Play Clicky Game</CardLink>
      <CardLink href="https://github.com/lmdodson/Clicky-Game" target="_blank">Github Project</CardLink>
    </CardBody>
  </Card>
  );
};
export default Clicky;