import React from "react";

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
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_31.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669061373660"
                alt=""
              />
              <h3>Business simplified</h3>
              <p>
                Post a job or apply for one in a minute. No browser plugins, 3rd
                party apps, credit card details, or wallet-linking necessary.{" "}
              </p>
              <p>Fast, efficient & easy the way blockchain is meant to be</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_31.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669061373660"
                alt=""
              />
              <h3>Tranceparency</h3>
              <p>
              By implementing an automated dispute system and reputation stored on the blockchain.{" "}
              </p>
              <p>we’re building a trustworthy platform all stakeholders can rely on.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_31.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669061373660"
                alt=""
              />
              <h3>Escrow</h3>
              <p>
              With escrow, Freelancers have the guarantee of payment for their services, while the Employer’s funds are safe until the Freelancer produces the expected work.{" "}
              </p>
              <p> As it’s based on smart contracts, escrow can’t be manipulated in any way, and makes trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feauters;
