import React from "react";

export const ListItem = props => {
  return (
    <li className={props.className}>
      <a href={props.href} className='navbar__list_link'>
        {props.text}
      </a>
    </li>
  );
};
