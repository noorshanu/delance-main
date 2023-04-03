import React from "react";

import { NavLink, useLocation } from "react-router-dom";
import "./Footer.css";

import { useTranslation } from "react-i18next";
import SocialLinks from "Components/SocialLinks";
import { to } from "utils/RouterUtils";
import LinkScroller from "Components/LinkScroller";

function Footer() {
  const { t } = useTranslation("common");
  const location = useLocation();

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-stack">
              <div>
                <NavLink to={to("")}>
                  <img
                    src={"/images/logos/logo-white-1.svg"}
                    className="footer-logo"
                    alt="foot-logo"
                  />
                </NavLink>

                <p style={{ maxWidth: "28rem" }} className="mb-0 white fs-16px">
                  {t(
                    "DeeLance is a freelancing and recruitment platform based on Web3. It's a decentralized platform revolutionizing how freelancers connect with potential employers."
                  )}
                </p>
              </div>

              <div className="foot-links-wrapper">
                <NavLink
                  className="foot-link fs-16px"
                  to={to("/privacy-policy")}
                  target="_blank"
                >
                  {t("Privacy")}
                </NavLink>
                <NavLink
                  className="foot-link fs-16px"
                  to={to("/risk")}
                  target="_blank"
                >
                  {t("Risk Warning")}
                </NavLink>

                <NavLink
                  className="foot-link fs-16px"
                  to={to("/privacy-policy")}
                  target="_blank"
                >
                  {t("Cookie Preferences")}
                </NavLink>
              </div>

              <div className="foot-links-wrapper">
                <LinkScroller
                  id="about-us"
                  to={to("")}
                  className="foot-link"
                  wait={location.pathname === to("") ? 0 : 100}
                  scrollerOptions={{
                    offset: -20,
                  }}
                >
                  {t("About")}
                </LinkScroller>

                <NavLink to={to("")} className="foot-link fs-16px" href="/">
                  {t("Careers")}
                </NavLink>

                <NavLink
                  to={to("/terms")}
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
              {t("2023© DeeLance Inc. | All Rights Reserved")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
