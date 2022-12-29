import React from "react";
import MobWhyus from "./MobWhyus";

import "./Why.css";

function WhyUs() {
  return (
    <section className="why-us">
      <MobWhyus />
      <div className="container desktop-box-why">
        <div className="why-us-head text-center">
          <h1>
            Why <span className="green">Deelance</span>{" "}
          </h1>
        </div>

        <div className="why-us-box ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/find_jobs/logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669995470971"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col">
                  <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/image_8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669366389254"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col">
                  <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/image_9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669366389048"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col">
                  <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/image_10.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669366388768"
                      alt=""
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p>Client Fee</p>
                </th>
                <td>2%</td>
                <td>3%</td>
                <td>3.5%</td>
                <td>20%</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Freelancer Fee</p>{" "}
                </th>
                <td>10%</td>
                <td>10%</td>
                <td>20%</td>
                <td>20%</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Withdrawal Fee</p>
                </th>
                <td>Crypto/Instant</td>
                <td>
                  Min Payout $100 (2.75% Fee For Withdrawal For Currency
                  Conversion)
                </td>
                <td>
                  Min Payout $100 (5% Fee For Withdrawal For Currency
                  Conversion)
                </td>
                <td>
                  Min Payout $100 (5% Fee For Withdrawal For Currency
                  Conversion)
                </td>
              </tr>
              <tr>
                <th scope="row">Decentralized</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Content Ownership</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Efficient Escrow</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>

              <tr>
                <th scope="row">No Limit On Task Size</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>

              <tr>
                <th scope="row">Scalable Dispute System</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>

              <tr>
                <th scope="row">NFT / Metaverse</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Staff Recruitment</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
