import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import NavLogo from "../../assets/main-logo.svg";
import { useTranslation } from "react-i18next";
import LanguageSelector from "Components/LanguageSelector";
import { IoMdClose } from "react-icons/io";
import LinkScroller from "Components/LinkScroller";
import ConnectWalletBtn from "Components/ConnectWalletBtn";
import i18next from "i18next";
import { to } from "utils/RouterUtils";

function Navbar() {
  const isBelow1080px = useMediaQuery("(max-width : 1080px)");
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const mobileMenueRef = OutsideClickDetector(() => setShowMediaIcons(false));
  const [scrolled, setscrolled] = React.useState(false);
  const [lastScrollTop, setlastScrollTop] = React.useState(0);
  const [scrollHide, setScrollHide] = React.useState(false);

  const { t } = useTranslation("common");
  const location = useLocation();
  const params = useParams();

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setscrolled(true);

        if (window.scrollY > 600) {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > lastScrollTop) {
            setScrollHide(showMediaIcons ? false : true);
          } else {
            setScrollHide(false);
          }

          setlastScrollTop(scrollTop);
        }
      } else {
        setscrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <>
      <div
        className={`navbar-wrapper-main ${scrolled ? "scrolled" : ""} ${
          scrollHide ? "scrollHide" : ""
        }`}
      >
        <div className={`navbar-wrapper`}>
          <div className="container">
            <nav className="main-nav">
              <div className="main-nav-left">
                <NavLink to={to("")}>
                  {/* <img src={NavLogo} alt="" className="logo" /> */}
                  <img
                    src="/images/logos/logo-white-1.svg"
                    alt=""
                    className="logo"
                  />
                </NavLink>
              </div>
              <div
                ref={mobileMenueRef}
                className={`menu-link mobile-menu-link ${
                  showMediaIcons && "open"
                }`}
              >
                {isBelow1080px && (
                  <div className="-navbar-mobile-header">
                    <img src={NavLogo} alt="" className="-navbar-mobile-logo" />

                    <div className="-navbar-lang-close-btn">
                      <LanguageSelector />

                      <button
                        className="-navbar-close-btn"
                        onClick={() => setShowMediaIcons(false)}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}

                <div className="-nav-links">
                  <NavLink className="-nav-anchor" to={to("")}>
                    {t("Home")}
                  </NavLink>

                  {/* <div className="about-dropdown">
                    <a className="-nav-anchor">
                      {t("About")}
                      <FaAngleDown />
                    </a>

                    <div className="nav-about-dropdown-wrapper">
                      <div className="nav-about-dropdown-content">
                        <LinkScroller
                          id="about-us"
                          to={to("")}
                          className="-nav-anchor"
                          wait={location.pathname === to("") ? 0 : 100}
                          onClick={() => setShowMediaIcons(false)}
                          scrollerOptions={{
                            offset: -20,
                          }}
                        >
                          {t("About")}
                        </LinkScroller>

                        <NavLink className="-nav-anchor" to={to("/team")}>
                          {t("Team")}
                        </NavLink>

                        <a
                          href="https://docs.deelance.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="-nav-anchor"
                        >
                          {t("Whitepaper")}
                        </a>
                      </div>
                    </div>
                  </div> */}

                  <a
                    href="https://docs.deelance.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="-nav-anchor"
                  >
                    {t("Whitepaper")}
                  </a>

                  <NavLink className="-nav-anchor" to={to("/team")}>
                    {t("Team")}
                  </NavLink>
                  <NavLink className="-nav-anchor" to={to("/rewards")}>
                    {t("Win $100K")}
                  </NavLink>
                  <NavLink className="-nav-anchor" to={to("/nft-market")}>
                    {t("Nft Marketplace")}
                  </NavLink>
                  <NavLink className="-nav-anchor" to={to("/job-portal")}>
                    {t("find job")}
                  </NavLink>
                  <NavLink className="-nav-anchor" to={to("/academy")}>
                    {t("Academy")}
                  </NavLink>

                  {/* {account ? (
                <li>
                  <a href="/" className="p1-btn" onClick={disconnectButt}>
                    {`${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
                  </a>
                </li>
              ) : (
                <li>
                  <a href="/" className="p1-btn" onClick={handleClick}>
                    {t("Connect")}
                  </a>
                </li>
              )} */}
                  <div className="-nav-connect-btn">
                    {/* <Web3Button icon={false} /> */}
                    <ConnectWalletBtn setShowMediaIcons={setShowMediaIcons} />
                  </div>

                  {!isBelow1080px && <LanguageSelector />}
                </div>
              </div>

              {isBelow1080px && (
                <div
                  className={`black-screen ${showMediaIcons && "show"}`}
                ></div>
              )}

              {isBelow1080px && (
                <div className="hamburger-menu">
                  <button
                    onClick={() => setShowMediaIcons(!showMediaIcons)}
                    className="hamburger"
                  >
                    <GiHamburgerMenu />
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
