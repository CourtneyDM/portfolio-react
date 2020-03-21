import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends React.Component {
  // Set navbar active links on page scroll
  setActiveLink = menu_link => {
    let active_links = document.querySelectorAll(".navbar__list_link");
    active_links.forEach(link => {
      link.setAttribute("class", "navbar__list_link");
    });
    menu_link.setAttribute("class", "navbar__list_link active");
  };

  // Event handler for page scroll
  onPageScroll = () => {
    // Get offsetTop for each section
    let about = document.querySelector("#about").offsetTop,
      skills = document.querySelector("#skills").offsetTop,
      portfolio = document.querySelector("#portfolio").offsetTop,
      contact = document.querySelector("#contact").offsetTop;

    // Get the current Y position of the window
    let scrollYPos = window.scrollY;

    // Check the current Y position and set the active link based on each section's offsetTop
    if (scrollYPos >= about && scrollYPos < skills) {
      this.setActiveLink(document.getElementById("nav_about"));
    } else if (scrollYPos >= skills && scrollYPos < portfolio) {
      this.setActiveLink(document.getElementById("nav_skills"));
    } else if (scrollYPos >= portfolio && scrollYPos < contact) {
      this.setActiveLink(document.getElementById("nav_portfolio"));
    } else this.setActiveLink(document.getElementById("nav_contact"));
  };

  render() {
    document.addEventListener("scroll", this.onPageScroll);
    return (
      <Fragment>
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
