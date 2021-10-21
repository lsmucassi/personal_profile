import React from 'react';
import classes from './AboutMe.module.css';

class AboutMe extends React.Component {
  aboutMeRef = null;

  constructor(props) {
    super(props);
    this.aboutMeRef = React.createRef();
  }

  scrollToMyRef = () => {
    window.scroll({
      top: this.aboutMeRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const technologies = [
      'JavaScript',
      'Python',
      'Java',
      'Kotline',
      'Dart',
      'Swift',
      'React & NextJS',
      'Amazon Web Services',
      'Design Patterns',
      'Software Principles',
      'Agile',
      'Git + CI/CD',
      'Linux',
      'SCRUM & Kanban',
    ];

    const technologiesList = technologies.map((el) => (
      <li key={el} className={classes.GridListItem}>
        {el}
      </li>
    ));

    return (
      <div className={classes.AboutMe} ref={this.aboutMeRef}>
        <h2 className={classes.Heading}>About Me</h2>
        <p className={classes.Description}>
          Hello, World, Linda Mucassi here. A software engineer from South Africa.
        </p>
        <p className={classes.Description}>
          I am a software engineer, passionate about tech and life and how 
          the two share the social space, and yes coffee comes first because 
          that is the bits of making awesome code.

          I am always open to learning new concepts. One of the things I enjoy 
          doing is to solve common daily problems, through technology.
        </p>
        <p className={classes.Description}>
          I am always looking to secure and expand a responsible position in an
          IT organization, where I can bring immediate and strategic value and
          develop current skillset further and beyond the actual status quo. I
          love working with cutting-edge technology and playing with the latest
          gadgets.
        </p>
        <p>
          Some selected technologies and methodologies I worked with recently:
        </p>
        <ul className={classes.GridList}>{technologiesList}</ul>
      </div>
    );
  }
}

export default AboutMe;
