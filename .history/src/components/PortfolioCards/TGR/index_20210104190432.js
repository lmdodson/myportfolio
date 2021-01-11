import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';
import "./style.css";
const TGR = () => {
  return (
    <Card>
    <CardImg top width="100%" src={require('../../../assets/images/galaxy-4291517_1920.jpg')} alt="Card image cap"/>
    <CardBody className='cardContainer'>
      <CardTitle tag="h5">The Gate Room</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Web-based Interactive Story App</CardSubtitle>
      <CardText>The Gate Room is a web application designed to host multiple interactive stories to delight and entertain.</CardText>
      <CardLink href="https://tgr-testing.herokuapp.com/" target="_blank">Enter The Gate Room</CardLink>
      <CardLink href="https://github.com/lmdodson/the-gate-room" target="_blank">Github Project</CardLink>
    </CardBody>
  </Card>
  );
};
export default TGR;