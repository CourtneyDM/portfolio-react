import "./Navbar.css";
import React from "react";
import { List, ListItem } from "../List";
import Header from "../Header";

const Navbar = () => {
  return (
    <Header className='site__header'>
      <nav className='navbar'>
        <h1 className='navbar__heading'>Courtney Montgomery</h1>
        <List className='navbar__nav'>
          <ListItem href='#about' text='About' />
          <ListItem href='#skills' text='Skills' />
          <ListItem href='#portfolio' text='Portfolio' />
          <ListItem href='#contact' text='Contact' />
          {/* <a href='javascript:void(0)' className='icon'>
      <i className='fa fa-bars'></i>
    </a> */}
        </List>
      </nav>
    </Header>
  );
};

export default Navbar;
