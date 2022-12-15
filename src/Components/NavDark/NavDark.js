import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavDark.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaAngleDown} from 'react-icons/fa'
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";

function NavDark() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  const dropdownRef = OutsideClickDetector(() => {
    setIsHover(false);
  });
  const dropdownToggler = () => {
    setIsHover((val) => !val);
  };

  return (
    <>
      <nav className="container main-nav nav-Dark-1">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <NavLink to='/'>
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/find_jobs/logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669995470971"
              alt=""
              className=""
            />
            </NavLink>
         
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link menu-dark"
          }
        >
          <ul>
          <li>
              <NavLink to="/" >Home</NavLink>
            </li>
          
            <li className="drop-btn"  ref={dropdownRef}>
              <a href="#drop" className="dp" 
              onMouseEnter={() =>
                isBellow1024px ? null : setIsHover(true)
              }
              onMouseLeave={() =>
                isBellow1024px ? null : setIsHover(false)
              }
              onClick={() => dropdownToggler()}
              >About us <FaAngleDown/></a>
              <div className={isHover?'dropdown-active':"dropdown"}
               onMouseEnter={() =>
                isBellow1024px ? null : setIsHover(true)
              }
              onMouseLeave={() =>
                isBellow1024px ? null : setIsHover(false)
              }>
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
            </li>
       
            <li>
              <NavLink to="/rewards" >Rewards</NavLink>
            </li>
            <li>
              <NavLink to="/nft-market" >NFT marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/job-portal">Find Job</NavLink>
            </li>
            <li>
              <NavLink to="/academy">Academy</NavLink>
            </li>
            
            <li>
              <a href="#team" className="explore-btn">Find Freelancer</a>
            </li>
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" className="dark-a" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavDark;
