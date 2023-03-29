import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import NavLogo from "../../assets/main-logo.svg";
import { useTranslation } from "react-i18next";
import SocialLinks from "Components/SocialLinks";

function Footer() {
  const { t } = useTranslation("common");

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-stack">
              <div>
                <div className="footer-logo">
                  <NavLink to="/">
                    <img src={NavLogo} alt="foot-logo" />
                  </NavLink>
                </div>

                <p style={{ maxWidth: "28rem" }} className="mb-0 white fs-16px">
                  {t(
                    "footer.subtitle",
                    "Deelance is a freelancing and Recruitment platform based on Web3 platform that is redefining how freelancers connect with potential employers and buyers."
                  )}
                </p>
              </div>

              <div className="foot-links-wrapper">
                <NavLink
                  className="foot-link fs-16px"
                  to="/privacy-policy"
                  target="_blank"
                >
                  {t("Privacy")}
                </NavLink>
                <NavLink
                  className="foot-link fs-16px"
                  to="/risk"
                  target="_blank"
                >
                  {t("Risk Warning")}
                </NavLink>
                <a href="/" className="foot-link white-16px">
                  {t("Announcements")}
                </a>
                <NavLink
                  className="foot-link fs-16px"
                  href="/privacy-policy"
                  target="_blank"
                >
                  {t("Cookie Preferences")}
                </NavLink>
              </div>

              <div className="foot-links-wrapper">
                <a className="foot-link fs-16px" href="/">
                  {t("About")}
                </a>
                <a className="foot-link fs-16px" href="/">
                  {t("Careers")}
                </a>
                <a className="foot-link fs-16px" href="/">
                  {t("Community")}
                </a>
                <NavLink
                  to="/terms"
                  className="foot-link fs-16px"
                  target="_blank"
                >
                  {t("Terms")}
                </NavLink>
              </div>

              <div className="">
                <p className="fs-16px white">
                  {t("Connect With The Community")}
                </p>

                <SocialLinks fontSize="78%" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="fs-16px white mb-0 text-center">
              {t("2023© Deelance Inc. | All Rights Reserved")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
