import React from "react";
import MobWhyus from "./MobWhyus";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'

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
                <th scope="col"> </th>
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
                      src="https://ik.imagekit.io/cforcrypto/Dework/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672314856661"
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
                      src="https://ik.imagekit.io/cforcrypto/Dework/Fiverr_New_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672314856553"
                      alt=""
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue">
                <th scope="row ">
                  <p>Client Fee</p>
                </th>
                <td className="text-center">2%</td>
                <td className="text-center">3%</td>
                <td className="text-center">3.5%</td>
                <td className="text-center">20%</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Freelancer Fee</p>{" "}
                </th>
                <td className="text-center">10%</td>
                <td className="text-center">10%</td>
                <td className="text-center">20%</td>
                <td className="text-center">20%</td>
              </tr>
              <tr>
                <th scope="row">
                  <p>Withdrawal Fee</p>
                </th>
                <td className="text-center">Crypto/Instant</td>
                <td className="text-center">
                  Min Payout $100 (2.75% Fee For Withdrawal For Currency
                  Conversion)
                </td>
                <td className="text-center">
                  Min Payout $100 (5% Fee For Withdrawal For Currency
                  Conversion)
                </td>
                <td className="text-center">
                  Min Payout $100 (5% Fee For Withdrawal For Currency
                  Conversion)
                </td>
              </tr>
              <tr>
                <th scope="row">Decentralized</th>
                <td className="green text-center"><AiOutlineCheckCircle/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
              </tr>
              <tr>
                <th scope="row">Content Ownership</th>
                <td className="green text-center"><AiOutlineCheckCircle/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
              </tr>
              <tr>
                <th scope="row">Efficient Escrow</th>
                <td className="text-center">Yes</td>
                <td className="text-center">No/Partial</td>
                <td className="text-center">No/Partial</td>
                <td className="text-center">No/Partial</td>
              </tr>

              <tr>
                <th scope="row">No Limit On Task Size</th>
                <td className="green text-center"><AiOutlineCheckCircle/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
              </tr>

              <tr>
                <th scope="row">Scalable Dispute System</th>
                <td className="green text-center"><AiOutlineCheckCircle/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
              </tr>

              <tr>
                <th scope="row">NFT / Metaverse</th>
                <td className="green text-center"><AiOutlineCheckCircle/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
              </tr>
              <tr>
                <th scope="row">Staff Recruitment</th>
                <td className="green text-center"><AiOutlineCheckCircle/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
                <td className="text-center"><MdOutlineCancel/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
