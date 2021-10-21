import React from 'react';
import classes from './Footer.module.css';

const footer = () => {
  return (
    <div className={classes.Footer}>
      <a
        href='https://github.com/lsmucassi'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div>Do we really need a footer ?</div>
        <span>I mean we have the side thing! Click here to see my Git</span>
      </a>
    </div>
  );
};

export default footer;
