import React from "react";

export const ListItem = props => {
  return (
    <li>
      <a href={props.href} className='navbar__list_item'>
        {props.text}
      </a>
    </li>
  );
};
