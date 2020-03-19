import "./Navbar.css";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { List, ListItem } from "../List";
import Header from "../Header";

class Navbar extends Component {
  setActiveLink = menu_link => {
    let active_links = document.querySelectorAll(".navbar__list_link");
    active_links.forEach(link => {
      link.setAttribute("class", "navbar__list_link");
    });
    menu_link.setAttribute("class", "navbar__list_link active");
  };
  onClick = event => {
    let active_link = document.getElementById(event.target.id);
    this.setActiveLink(active_link);
  };

  onMenuToggle = () => {
    let navbar = document.getElementById("nav");

    if (navbar.className === "navbar__nav") {
      navbar.setAttribute("class", "navbar__nav responsive");
    } else {
      navbar.setAttribute("class", "navbar__nav");
    }
  };

  onPageScroll = () => {
    let link;
    if (window.scrollY >= 0 && window.scrollY < 500) {
      link = document.getElementById("nav_about");
      this.setActiveLink(link);
    }
    if (window.scrollY >= 500 && window.scrollY < 1135) {
      link = document.getElementById("nav_skills");
      this.setActiveLink(link);
    }
    if (window.scrollY >= 1135 && window.scrollY < 3325) {
      link = document.getElementById("nav_portfolio");
      this.setActiveLink(link);
    }
    if (window.scrollY >= 3325) {
      link = document.getElementById("nav_contact");
      this.setActiveLink(link);
    }
  };
  render() {
    document.addEventListener("scroll", this.onPageScroll);
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
