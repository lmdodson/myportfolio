import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';
import "./style.css";
const WordGuess = () => {
  return (
    <Card>
    <CardImg top width="100%" src={require('../../../assets/images/christmas-bauble-15738_1920.jpg')} alt="blue portal in front of bench"/>
    <CardBody className='cardContainer'>
      <CardTitle tag="h5">Word Guess</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Front-End Letter Guessing Game</CardSubtitle>
      <CardText>A holiday take on a classic game, Word Guess was built with HTML, CSS, and JavaScript.</CardText>
      <CardLink href="https://lmdodson.github.io/Word-Guess-Game/" target="_blank">Play Word Guess</CardLink>
      <CardLink href="https://github.com/lmdodson/Word-Guess-Game" target="_blank">Github Project</CardLink>
    </CardBody>
  </Card>
  );
};
export default WordGuess;