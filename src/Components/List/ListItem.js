import React from "react";

export const ListItem = props => {
  return (
    <li id={props.id} className={props.className}>
      <a href={props.href} className='navbar__list_link'>
        {props.children}
      </a>
    </li>
  );
};
