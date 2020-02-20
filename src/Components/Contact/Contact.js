import "./Contact.css";
import React from "react";
import Header from "../Header";
import { Section } from "../Section";
import { Main } from "../Section";

const Contact = props => {
  return (
    <Section className='contact__section' id='contact'>
      <Header className='contact__header'>
        <h1 className='contact__heading'>Let's Connect</h1>
        <Main className='contact__content'>
          <p className='content__default_font'>
            Want to collaborate on a project? Have a development opportunity?
            Let's connect. I look forward to hearing from you.
          </p>
          <div className='contact__option flex_row'>
            {/* Contact Links */}
            <article className='contact__links flex_col'>
              <div className='contact__details' id='contact__link_email'>
                <img
                  src='../../../assets/img/icons/circle_email.svg'
                  alt='Email'
                  className='contact__icon'
                />
                <a
                  href='mailto:courtney@courtneydm.tech?subject=Development Opportunity (courtneydm.tech)'
                  className='content__default_font'
                >
                  Courtney@CourtneyDM.tech
                </a>
              </div>
              <div className='contact__details' id='contact__link_linkedin'>
                <img
                  src='../../../assets/img/icons/circle_linkedin.svg'
                  alt='LinkedIn profile'
                  className='contact__icon'
                />
                <a
                  href='https://linkedin.com/in/courtneydm'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='content__default_font'
                >
                  LinkedIn.com/in/CourtneyDM
                </a>
              </div>
              <div className='contact__details' id='contact__link_github'>
                <img
                  src='../../../assets/img/icons/circle_github.svg'
                  alt='Github profile'
                  className='contact__icon'
                />
                <a
                  href='https://github.com/courtneydm'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='content__default_font'
                >
                  Github.com/CourtneyDM
                </a>
              </div>
            </article>
            <article className='contact__form flex_col'>
              <form
                action='https://formspree.io/courtney@courtneydm.tech'
                method='post'
              >
                <div className='contact__form_group'>
                  <label htmlFor='name' className='contact__form_label'>
                    Full Name:{" "}
                  </label>
                  <br />
                  <input
                    type='text'
                    name='name'
                    className='form_input_control'
                    placeholder='Your name here'
                    size='60'
                    id='form_input_name'
                  />
                </div>
                <div className='contact__form_group'>
                  <label htmlFor='email' className='contact__form_label'>
                    Email Address:{" "}
                  </label>
                  <br />
                  <input
                    type='email'
                    name='_replyTo'
                    className='form_input_control'
                    placeholder='your_email@domain.com'
                    size='60'
                    id='form_input_email'
                  />
                </div>
                <div className='contact__form_group'>
                  <label htmlFor='message' className='contact__form_label'>
                    Your Message:{" "}
                  </label>
                  <br />
                  <textarea
                    name='message'
                    cols='60'
                    rows='5'
                    className='form_input_control'
                    placeholder='Your message here...'
                    id='form_input_message'
                  ></textarea>
                </div>
                <button
                  className='contact__form_button'
                  type='submit'
                  value='Send'
                >
                  Send Message
                </button>
              </form>
            </article>
          </div>
        </Main>
      </Header>
    </Section>
  );
};

export default Contact;
