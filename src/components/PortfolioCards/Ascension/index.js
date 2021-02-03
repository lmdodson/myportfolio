import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink, Col
} from 'reactstrap';
import "./style.css";
const Ascension = () => {
  return (
    <Card className='newCard'>
    <CardImg top width="100%" className='cardImage' src={require('../../../assets/images/Ascension_Icon_Square.png')} alt="Ascension character Cooper, overheated metal with wings"/>
    <CardBody className='cardContainerEach'>
      <CardTitle tag="h5">Ascension</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Mobile game for iOS</CardSubtitle>
      <CardText>Ascension is a platform jumper designed to develop quick decision-making and hand-eye coordination. It was created in Unity with C#.</CardText>
      <CardLink href="http://bit.ly/AscensionMobile" target="_blank">Ascension on the App Store</CardLink>
    </CardBody>
  </Card>
  );
};
export default Ascension;