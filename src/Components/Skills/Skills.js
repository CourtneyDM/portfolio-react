import "./Skills.css";
import React, { Component } from "react";
import Header from "../Header";
import { Main } from "../Section";
import { Section } from "../Section";
import FrontEnd from "./frontend";
import BackEnd from "./backend";

class Skills extends Component {
  state = {
    frontEnd: FrontEnd,
    backEnd: BackEnd
  };

  render() {
    return (
      <Section className='skills__section' id='skills'>
        <Header className='skills__header'>
          <h1 className='skills__heading'>Competencies</h1>
        </Header>
        <Main className='skills__content_container'>
          <p className='skills__content'>
            I am most familiar with the MERN Stack - MongoDB, Express, React,
            Node - an am proficient in JavaScript, HTML and CSS. I have
            experience with PHP, Python and VueJS, along with various
            lower-level programming languages. In addition to the frameworks
            below, I have used the following technologies in my projects: APIs,
            Handlebars, Redux, REST and RxJS & Observables.
          </p>
          <div className='skills__full_stack'>
            <article className='skills__front_end'>
              <h1 className='skills__stack_heading'>Front-End Technologies</h1>
              <div className='skills__stack_logos'>
                {this.state.frontEnd.map((skill, index) => {
                  return (
                    <img
                      key={index}
                      src={skill.img}
                      alt={skill.name}
                      className='skills__stack_logo'
                    />
                  );
                })}
              </div>
            </article>
            <article className='skills__back_end'>
              <h1 className='skills__stack_heading'>Back-End Technologies</h1>
              <div className='skills__stack_logos'>
                {this.state.backEnd.map((skill, index) => {
                  return (
                    <img
                      key={index}
                      src={skill.img}
                      alt={skill.name}
                      className='skills__stack_logo'
                    />
                  );
                })}
              </div>
            </article>
          </div>
        </Main>
      </Section>
    );
  }
}

export default Skills;
