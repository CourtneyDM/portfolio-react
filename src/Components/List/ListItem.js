import React from "react";

export const ListItem = props => {
  return (
    <li onClick={props.onClick} className={props.className}>
      <a href={props.href} id={props.id} className='navbar__list_link'>
        {props.children}
      </a>
    </li>
  );
};
