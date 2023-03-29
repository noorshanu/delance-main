import "./About.css";
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import Lottie from "react-lottie";
import Meta from "./about.json";
import { useTranslation } from "react-i18next";

const aboutPoints = [
  {
    title: "Fully Decentralized",
    desc: "First fully decentralized freelance network",
  },
  { title: "Only 2% Commission", desc: "Lowest In the Industry" },
  {
    title: "Unlimited Ownership",
    desc: "Instant withdrawal recruitment platform",
  },
];

function About() {
  const { t } = useTranslation("common");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Meta,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="about">
      <div className="container">
        <div className="about-box">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                {/* <img
                  src={`https://ik.imagekit.io/cforcrypto/image_${scrolled.toString().padStart (4, '0')}.png`}
                  alt=""
                  className="about-img-1"
                /> */}
                <Lottie
                  options={defaultOptions}
                  className="loti-1"
                  width="auto"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="head-about-txt">
                <h1>
                  {t("About")} <span className="green-light">{t("Us")}</span>
                </h1>
              </div>
              <div className="about-details">
                <p>
                  {t(
                    "DeeLance is a freelancing and recruitment platform based on a decentralized Web3 architecture. The DeeLance platform redefines how freelancers connect with potential employers and buyers by delivering superior efficiency and confidence."
                  )}
                </p>
              </div>
              <div className="list-box">
                {aboutPoints.map((item, i) => (
                  <div key={i}>
                    <h3 className="green-light">
                      <AiOutlineCheckCircle /> {t(item.title)}
                    </h3>
                    <p>{t(item.desc)}</p>
                  </div>
                ))}

                {/* <h3 className="green">
                  <AiOutlineCheckCircle /> 2% Commission{" "}
                </h3>
                <p>Only 2% Commission lowest In the Industry</p>

                <h3 className="green">
                  <AiOutlineCheckCircle /> Instant Withdrawal
                </h3>
                <p>
                  Unlimited ownership Instant Withdrawal recruitment platform
                </p> */}
              </div>
              <div className="gp-1">
                <a href="/" className="demo-btn">
                  {t("buttons.buy_now")} <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
