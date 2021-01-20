import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import './style.css';

const RotatingText = () => {

  return( 
    <ReactRotatingText items={['Storyteller.', 'Web Developer.', 'Writer.', 'Game Developer.', 'Dodge Juggle Protect Champion.', 'Creator.' ]} />
  )
}

export default RotatingText;