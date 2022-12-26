import React from "react";
import "./Features.css";
import MobFeauters from "./MobFeauters";

function Feauters() {
  return (
    <section className="features">
      <div className="container text-center">
        <div className="feat-header">
       
          <h1>Key <span className="green">Features</span></h1>
          <img src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_427325103.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800599" alt=""/>
        </div>
      </div>
      <MobFeauters className='mob-feat'/>
      <div className="container desktop-feat">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_1261152731.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800596"
                  alt=""
                />
              </div>

              <h3 className="green">Business simplified</h3>
              <p>
                Post a job or apply for one in{" "}
                a minute.No browser plugins, 3rd
                party apps, credit card details, or wallet-linking necessary.
                Fast, efficient & easy the way
                blockchain is meant to be
              </p>
              <p> </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800579"
                  alt=""
                />
              </div>

              <h3 className="green">Transparency</h3>
              <p>
                By implementing an{" "}
              automated dispute system and
                reputation stored on the blockchain. we’re building a{" "}
                trustworthy platform all
                stakeholders can rely on.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_1261152740.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800622"
                  alt=""
                />
              </div>

              <h3 className="green">Escrow</h3>
              <p>
                With escrow, Freelancers have the{" "}
                guarantee of payment for their
                services, while the Employer’s funds are safe until the
                Freelancer produces the expected work. As it’s based on{" "}
                smart contracts.
              </p>
              <p> </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mtf-60">
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_1261152741.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800563"
                  alt=""
                />
              </div>

              <h3 className="green">Ownership</h3>
              <p>
                With NFT (NFT) get ownership of the underlying{" "}
                asset or piece of work.{" "}
                 NFTs can represent: art, music,
                photographs, designs, web pages, animations, videos, royalty or
                copyright of work etc.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group__1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800609"
                  alt=""
                />
              </div>

              <h3 className="green">Low Fees</h3>
              <p>
                Our decentralized and reputation
                stored on the blockchain. freelance market
               ecosystem alower fees by
                directly connecting Employers and Freelancers.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feat-box">
              <div className="feat-img">
                <img
                  src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_1261152743.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800566"
                  alt=""
                />
              </div>

              <h3 className="green">Fast Payments</h3>
              <p>
                You can use Crypto get paid for
                your services quickly and avoid currency{" "}
                exchange and possible commission
                rates{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feauters;
