import React, { useState } from "react";

import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="container main-nav">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
              alt=""
              className=""
            />
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
           
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="#feature">Team</a>
            </li>
           
           <li>
            <a href="https://docs.dework.live/" target='_blank' rel="noreferrer">Whitepaper</a>
           </li>
            
            <li>
              <a href="#road">NFT marketplace</a>
            </li>
            <li>
              <a href="#road">Find Job</a>
            </li>
            <li>
              <a href="#road">Academy</a>
            </li>
            
            <li>
              <a href="#team" className="explore-btn">Explore</a>
            </li>
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
