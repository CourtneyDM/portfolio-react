import "./Navbar.css";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { List, ListItem } from "../List";
import Header from "../Header";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: ""
    };
  }
  componentDidMount() {
    this.setState({
      width: window.visualViewport.width
    });
  }
  setActiveLink = menu_link => {
    let active_links = document.querySelectorAll(".navbar__list_link");
    active_links.forEach(link => {
      link.setAttribute("class", "navbar__list_link");
    });
    menu_link.setAttribute("class", "navbar__list_link active");
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
    let contact, portfolio, skills;
    if (this.state.width >= 320) {
      skills = 795;
      portfolio = 2015;
      contact = 4090;
    }
    if (this.state.width >= 480) {
      skills = 595;
      portfolio = 1475;
      contact = 3840;
    }
    if (this.state.width >= 768) {
      skills = 495;
      portfolio = 1120;
      contact = 3350;
    }
    if (this.state.width >= 992) {
      skills = 420;
      portfolio = 1040;
      contact = 2315;
    }
    if (this.state.width >= 1200) {
      skills = 450;
      portfolio = 1170;
      contact = 2575;
    }
    if (this.state.width >= 1536) {
      skills = 728;
      portfolio = 1605;
      contact = 2735;
    }
    // use window.visualViewPort.width to help determine the value of window.scrollY
    let link;
    if (window.scrollY >= 0 && window.scrollY < skills) {
      link = document.getElementById("nav_about");
      this.setActiveLink(link);
    }
    if (window.scrollY >= skills && window.scrollY < portfolio) {
      link = document.getElementById("nav_skills");
      this.setActiveLink(link);
    }
    if (window.scrollY >= portfolio && window.scrollY < contact) {
      link = document.getElementById("nav_portfolio");
      this.setActiveLink(link);
    }
    if (window.scrollY >= contact) {
      link = document.getElementById("nav_contact");
      this.setActiveLink(link);
    }
  };
  render() {
    /* 
    Skills
    480px: 647
    768px: 520
    992px: 498
    1200px: 535
    1536px: 824

    Portfolio
    480px: 1528
    768px: 1229
    992px: 1124
    1200px: 1255
    1536px: 1699

    Contact
    480px: 3891
    768px: 3507
    992px: 2397
    1200px: 2658
    1536px: 2829
    
    */
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
