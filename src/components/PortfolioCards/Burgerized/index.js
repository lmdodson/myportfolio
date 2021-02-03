import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import "./style.css";
const Burgerized = () => {
  return (
    <Card className='newCard'>
    <CardImg top width="100%" src={require('../../../assets/images/burger.png')} alt="cartoon cheeseburger"/>
    <CardBody className='cardContainerEach'>
      <CardTitle tag="h5">Burgerized</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Web-based Ordering App</CardSubtitle>
      <CardText>App designed to allow patrons to order a custom burger or reorder one already logged.</CardText>
      <CardLink href="https://burgerized.herokuapp.com/" target="_blank">Burgerized on Heroku</CardLink>
      <CardLink href="https://github.com/lmdodson/burger" target="_blank">Github Project</CardLink>
    </CardBody>
  </Card>
  );
};
export default Burgerized;