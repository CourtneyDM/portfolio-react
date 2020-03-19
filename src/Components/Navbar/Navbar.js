import "./Navbar.css";
import React, { Component } from "react";
import { List, ListItem } from "../List";
import Header from "../Header";

class Navbar extends Component {
  onClick = event => {
    document.querySelectorAll(".navbar__list_link").forEach(item => {
      item.classList.remove("active");
    });

    let active_link = document.getElementById(event.target.id);
    active_link.classList.add("active");
  };

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
              onClick={this.onClick}
              className='navbar__list_item'
              href='#about'
            >
              About
            </ListItem>
            <ListItem
              id='nav_skills'
              onClick={this.onClick}
              className='navbar__list_item'
              href='#skills'
            >
              Skills
            </ListItem>
            <ListItem
              id='nav_portfolio'
              onClick={this.onClick}
              className='navbar__list_item'
              href='#portfolio'
            >
              Portfolio
            </ListItem>
            <ListItem
              id='nav_contact'
              onClick={this.onClick}
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
