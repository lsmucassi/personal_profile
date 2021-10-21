import React from 'react';
import classes from './Introduction.module.css';
import BigText from '../UI/BigText/BigText';
import Button from '../UI/Button/Button';
import mailtoHandler from '../../services/mailToHandler';

class Introduction extends React.Component {
  render() {
    return (
      <div className={classes.Introduction}>
        <div className={classes.Heading}>Hi, my name is</div>
        <BigText>Linda Mucassi</BigText>
        <BigText color="Dark">I Build Awesome Stuff</BigText>
        <div className={classes.Description}>
          I am a software engineer, passionate about tech and life and 
          how the two share the social space, and yes coffee comes first 
          because that is the bits of making awesome code.

          I am always open to learning new concepts. One of the things I 
          enjoy doing is to solve common daily problems, through technology.
        </div>
        <Button clicked={() => mailtoHandler()} size={1.2}>
          Get In Touch
        </Button>
      </div>
    );
  }
}

export default Introduction;
