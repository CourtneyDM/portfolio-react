import "./Navbar.css";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { List, ListItem } from "../List";
import Header from "../Header";

class Navbar extends Component {
  // Display navbar when hamburger menu is toggled
  onMenuToggle = () => {
    let navbar = document.getElementById("nav");

    if (navbar.className === "navbar__nav") {
      navbar.setAttribute("class", "navbar__nav responsive");
    } else {
      navbar.setAttribute("class", "navbar__nav");
    }
  };

  render() {
    return (
      <Header className='site__header'>
        <nav className='navbar'>
          <h1 className='navbar__heading'>Courtney Montgomery</h1>
          <List className='navbar__nav' id='nav'>
            <ListItem className='icon' id='navbar__hamburger'>
              <i onClick={this.onMenuToggle} className='fa fa-bars'></i>
            </ListItem>
            <ListItem
              id='nav_about'
              className='navbar__list_item'
              href='#about'
            >
              About
            </ListItem>
            <ListItem
              id='nav_skills'
              className='navbar__list_item'
              href='#skills'
            >
              Skills
            </ListItem>
            <ListItem
              id='nav_portfolio'
              className='navbar__list_item'
              href='#portfolio'
            >
              Portfolio
            </ListItem>
            <ListItem
              id='nav_contact'
              className='navbar__list_item'
              href='#contact'
            >
              Contact
            </ListItem>
          </List>
        </nav>
      </Header>
    );
  }
}

export default Navbar;
