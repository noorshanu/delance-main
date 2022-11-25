import React from "react";
import "./Features.css";

function Feauters() {
  return (
    <section className="features">
      <div className="container text-center">
        <div className="feat-header">
          <h1>Features</h1>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__2_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940367"
                alt=""
              />
              </div>
           
              <h3>Business simplified</h3>
              <p>
                Post a job or apply for one in <span className="black">a minute.</span>  No browser plugins, 3rd
                party apps, credit card details, or wallet-linking necessary.{" "}
              </p>
              <p> <span className="black">Fast, efficient & easy</span>  the way blockchain is meant to be</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__1_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940347"
                alt=""
              />
              </div>
           
              <h3>Tranceparency</h3>
              <p>
                By implementing an <span className="black">automated dispute system</span> and reputation
                stored on the blockchain.{" "}
              </p>
              <p>
                we’re building a <span className="black">trustworthy platform</span>  all stakeholders can rely
                on.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/icons/icon__6_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669384940388"
                alt=""
              />
              </div>
           
              <h3>Escrow</h3>
              <p>
                With escrow, Freelancers have the guarantee of payment for their
                services, while the Employer’s funds are safe until the
                Freelancer produces the expected work.{" "}
              </p>
              <p>
                {" "}
                As it’s based on smart contracts, escrow can’t be manipulated in
                any way, and makes trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feauters;
