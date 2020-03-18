import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
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
