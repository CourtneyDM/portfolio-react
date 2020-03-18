import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className='site__footer'>
      <main>
        <p className='site__footer_content'>
          Designed by <a href='#about'>Courtney Montgomery</a> | &copy;2018 All
          Rights Reserved
        </p>
      </main>
    </footer>
  );
};

export default Footer;
