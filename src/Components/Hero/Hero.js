import React, { useState } from "react";
import "./Hero.css";

import {AiOutlineArrowRight} from 'react-icons/ai'
import Model from "Components/Popup/Model";

function Hero() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>
                Creating <span className="green"> Web3 Space </span>For Better
                World To <span className="green">Work Together</span>
              </h1>

              <p className="hero-sp-p">
                Deelance is a freelancing and Recruitment platform based on
                Web3. Deelance is one such decentralized platform that is
                redefining how freelancers connect with potential employers and
                buyers
              </p>
           
              <div className="hero-btn">
                <a href="/" className="hero-btn-1">
                Find Freelancer  <AiOutlineArrowRight/>
                </a>
                <button className="hero-btn-2" onClick={() => setIsModal(true)}>
                Buy Now
                </button>
              </div>
            </div>
            <div className="col-md-6 text-end align-items-center">
              <img
                className="hero-img"
                src="https://ik.imagekit.io/cforcrypto/Dework/Asset_7-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672426894959"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="pop-up-sign">
          {isModal && <Model setIsModal={setIsModal} />}
        </div>
      </section>
    </>
  );
}

export default Hero;
