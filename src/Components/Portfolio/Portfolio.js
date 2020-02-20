import "./Portfolio.css";
import React, { Component } from "react";
import Header from "../Header";
import { Main } from "../Section";
import { Section } from "../Section";
import { Figure } from "../Section";
import Projects from "./projects.json";

class Portfolio extends Component {
  state = {
    projects: Projects
  };

  render() {
    return (
      <Section className='portfolio__section' id='portfolio'>
        <Header className='portfolio__header'>
          <h1 className='portfolio__heading'>Portfolio</h1>
          <Main className='portfolio__content'>
            <p className='content__default_font'>
              Below you will find a few of my projects, along with the tools &
              technologies used to build them. More details, as well as other
              projects, can be found on my{" "}
              <a
                href='http://github.com/courtneydm'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github page
              </a>
              . Resume available upon request.
            </p>
            <div className='portfolio__projects flex_row'>
              {this.state.projects.map((project, item) => {
                return (
                  <Figure
                    key={item}
                    heading={project.title}
                    imgSrc={project.img}
                    alt={project.title}
                    url={project.url}
                    figcaption={project.caption}
                  />
                );
              })}
            </div>
          </Main>
        </Header>
      </Section>
    );
  }
}

export default Portfolio;
