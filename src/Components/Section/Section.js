import React from "react";

export const Section = props => {
  return (
    <section className={props.className} id={props.id}>
      {props.children}
    </section>
  );
};
