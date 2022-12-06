import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaAngleDown} from 'react-icons/fa'

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isOpen, setIsOpen] =useState(false)

  return (
    <>
      <nav className="container main-nav">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <NavLink to='/'>
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
              alt=""
              className=""
            />
            </NavLink>
         
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
          <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <a href="#drop" className="" onClick={()=>setIsOpen(!isOpen)}>About us <FaAngleDown/></a>
            </li>
            <div className={isOpen ?"dropdown-display" :"dropdown"}>
            <li>
              <a href="/">About </a>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
           
           <li>
            <a href="https://docs.dework.live/" target='_blank' rel="noreferrer">Whitepaper</a>
           </li>
            </div>
       
            
            <li>
              <NavLink to="/nft-market" >NFT marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/job-portal" >Find Job</NavLink>
            </li>
            <li>
              <NavLink to="/academy" >Academy</NavLink>
            </li>
            
            <li>
              <a href="#team" className="explore-btn">Find Freelancer</a>
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
