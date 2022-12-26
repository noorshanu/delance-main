import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-box">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/Asset_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672057407049"
                  alt=""
                  className="about-img-1"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="head-about-txt">
                <h1>
                  About <span className="green">Us</span>
                </h1>
              </div>
              <div className="about-details">
                <p>
                  Deelance is a freelancing and Recruitment platform based on
                  Web3. Deelance is one such decentralized platform that is
                  redefining how freelancers connect with potential employers
                  and buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
