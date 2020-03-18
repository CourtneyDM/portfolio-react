import "./About.css";
import React from "react";
import Header from "../Header";
import { Main } from "../Section";
import { Section } from "../Section";

const About = () => {
  return (
    <Section className='hero__section' id='about'>
      <Header className='hero__header'>
        <h1 className='hero__heading'>Hi, I'm a Full-Stack Web Developer.</h1>
      </Header>

      <Main className='hero__content'>
        <div className='hero__img_container'>
          <img
            alt={"Avatar"}
            src='../../../assets/img/avatar.jpg'
            className='hero__img'
          />
        </div>
        <div className='hero__about_container'>
          <p className='hero__about_content'>
            I am a determined and motivated Full-Stack developer with a focus on
            creating clean, scalable web applications that provide competitive
            advantage. Eager to join a collaborative and inclusive environment
            with other top-tier talent.
            <br />
            <br />I have nearly fifteen years of experienced in the IT industry,
            which has allowed me to strengthen my collaborative, communication,
            and leadership skills. I have a Bachelor degree in Computer Science,
            and am a certfied Full-Stack web developer. Examples of my work can
            be viewed below.
          </p>
        </div>
      </Main>
    </Section>
  );
};

export default About;
