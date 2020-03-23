import React from "react";

export const Figure = props => {
  return (
    <figure className='portfolio__project'>
      <h5 className='project__heading'>{props.heading}</h5>
      <img
        src={props.imgSrc}
        alt={props.alt}
        className='project__img'
        data-url={props.url}
        data-heading={props.projectHeading}
        data-src={props.imgSrc}
      />
      <figcaption>
        <p className='project__caption'>
          <b>Description: </b>
          {props.figcaption}
        </p>
        <p className='project__caption'>
          <b>Technologies: </b>
          {props.technology}
        </p>
        <p className='project__caption'>
          <b>Site: </b>
          <a href={props.url} target='_blank' rel='noopener noreferrer'>
            {props.url}
          </a>
        </p>
      </figcaption>
    </figure>
  );
};
