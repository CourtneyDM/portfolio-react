import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends React.Component {
  componentDidMount = () => {
    // TEST: stretching width on iPhone X
    document.getElementById("root").style.minWidth =
      window.visualViewport.width;
  };
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
    let about = document.querySelector("#about"),
      skills = document.querySelector("#skills"),
      portfolio = document.querySelector("#portfolio"),
      contact = document.querySelector("#contact");

    // Get the current Y position of the window
    let scrollYPos = window.scrollY;

    // Check the current Y position and set the active link based on each section's offsetTop
    if (
      about.offsetTop <= scrollYPos &&
      about.offsetTop + about.offsetHeight > scrollYPos
    ) {
      this.setActiveLink(document.getElementById("nav_about"));
    } else if (
      skills.offsetTop <= scrollYPos &&
      skills.offsetTop + skills.offsetHeight > scrollYPos
    ) {
      this.setActiveLink(document.getElementById("nav_skills"));
    } else if (
      portfolio.offsetTop <= scrollYPos &&
      portfolio.offsetTop + portfolio.offsetHeight > scrollYPos
    ) {
      this.setActiveLink(document.getElementById("nav_portfolio"));
    } else if (
      contact.offsetTop <= scrollYPos &&
      contact.offsetTop + contact.offsetHeight > scrollYPos
    ) {
      this.setActiveLink(document.getElementById("nav_contact"));
    }
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
