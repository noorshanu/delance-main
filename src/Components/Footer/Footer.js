import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container border-foot-top">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3 col-6">
              <div className="footer-logo">
                <NavLink to='/'>
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
                  alt="foot-logo"
                />
                </NavLink>
            
              </div>
              <p className="sc-1">Conect With The Community</p>
              <div className="foot-social">
                <a
                  href="https://twitter.com/deelance_com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100087266006183"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://medium.com/@deeLance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaMedium />
                </a>
                <a
                  href="https://t.me/deelancer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://discord.gg/vhH3Sbt9NQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>
                <a
                  href="https://www.instagram.com/deelanceofficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="foot-btn-grup">
                <a href="/" className="hero-btn-1">
                  Sign up
                </a>
                <a href="/" className="hero-btn-2">
                  Explore
                </a>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="foot-link">
                <a href="/">
                  <p>About</p>
                </a>
                <a href="/">
                  <p>Careers</p>
                </a>

                <a href="/">
                  <p>Community</p>
                </a>

                <NavLink to="/terms" target="_blank">
                  <p>Terms</p>
                </NavLink>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="foot-link">
                <NavLink to="/privacy" target="_blank">
                  <p>Privacy</p>
                </NavLink>
                <NavLink to="/risk" target="_blank">
                  <p>Risk Warning</p>
                </NavLink>
                <a href="/">
                  <p>Announcements</p>
                </a>

                <NavLink href="/privacy" target="_blank">
                  <p>Cookie Preferences</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <p className="foot-bottom-text">
          2022© DeWork Inc. | All Rights Reserved{" "}
        </p>
      </footer>
    </>
  );
}

export default Footer;
