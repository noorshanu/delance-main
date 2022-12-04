import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="about-head-1">About Us</h1>
            <div className="about-topic">
              <div className="d-flex gap-4 ab-pd">
                <div className="ab-img">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/Rectangle_21.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669013135494"
                    alt=""
                  />
                </div>
                <div>
                  <p className="ab-p1">World’s First </p>
                  <p className="ab-p2">Fully Decentralized</p>
                  <p className="ab-p3">Freelance Network</p>
                </div>
              </div>

              <div className="d-flex gap-4 ab-pd">
                <div className="ab-img">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/Rectangle_21.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669013135494"
                    alt=""
                  />
                </div>
                <div>
                  <p className="ab-p1">Only </p>
                  <p className="ab-p2">2% Commision</p>
                  <p className="ab-p3">Lowest In The Industry</p>
                </div>
              </div>

              <div className="d-flex gap-4 ab-pd">
                <div className="ab-img">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/Rectangle_21.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669013135494"
                    alt=""
                  />
                </div>
                <div>
                  <p className="ab-p1">Fastest Growing Network </p>
                  <p className="ab-p2">8k+ Users</p>
                  <p className="ab-p3">Freelance Network</p>
                </div>
              </div>
            </div>
            <div  className="main-sub-btn">
            <a href="#team" className="explore-btn">BUY</a>
            </div>
          </div>

          <div className="col-md-7">
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/Asset_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269508409"
              alt=""
              className="ab-2-img"
            />
            <div className="about-details">
              <p>
              Deelance is a freelancing and Recruitment platform based on Web3.
              Deelance is one such decentralized platform that is redefining how
                freelancers connect with potential employers and buyers. Based
                on Web3, we are attempting to create a new freelance economy
                that removes intermediaries, gives freelancers full ownership of
                their work, and ensures the ownership of purchased digital work
                for buyers. It entails a metaverse with micro-communities where
                buyers and sellers of creative works can meet, discuss ideas,
                network, and form bonds, and an NFT marketplace.
              </p>
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Rectangle_103.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669060785239"
                alt=""
              />
              <p>
                We want to revolutionize the traditional world of Freelancing.
                in web3 freelancing will provide endless opportunities in the
                future. That's why we started Deelance to contribute to the
                movement of creating a secure and sustainable future for the gig
                economy. The freelancers experience many roadblocks and
                obstacles that may affect their livelihood.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://ik.imagekit.io/cforcrypto/Dework/WhatsApp_Image_2022-11-05_at_8.21_1__Traced_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669060785433"
        alt=""
        className="side-about"
      />
    </section>
  );
}

export default About;
