import React from "react";

export const List = props => {
  return (
    <ul id={props.id} className={props.className}>
      {props.children}
    </ul>
  );
};
