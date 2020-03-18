import "./Navbar.css";
import React, { Component } from "react";
import { List, ListItem } from "../List";
import Header from "../Header";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  onClick = () => {
    let links = document.querySelectorAll(".navbar__list_link");

    this.setState({
      isToggled: !this.state.isToggled
    });
    links.forEach(link => {
      if (this.state.isToggled) {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
  };
  render() {
    return (
      <Header className='site__header'>
        <nav className='navbar'>
          <h1 className='navbar__heading'>Courtney Montgomery</h1>
          <List className='navbar__nav'>
            <a
              href='#navbar__hamburger'
              id='navbar__hamburger'
              onClick={this.onClick}
            >
              <i className='fa fa-bars'></i>
            </a>
            <ListItem
              className='navbar__list_item'
              href='#about'
              text='About'
            />
            <ListItem
              className='navbar__list_item'
              href='#skills'
              text='Skills'
            />
            <ListItem
              className='navbar__list_item'
              href='#portfolio'
              text='Portfolio'
            />
            <ListItem
              className='navbar__list_item'
              href='#contact'
              text='Contact'
            />
          </List>
        </nav>
      </Header>
    );
  }
}

export default Navbar;
