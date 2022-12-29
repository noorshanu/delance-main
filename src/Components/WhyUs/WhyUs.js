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
                <th scope="col" className="b-right"> </th>
                <th scope="col" className="b-right">
                  <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/logo-white_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672338028484"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col" >
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
                      src="https://ik.imagekit.io/cforcrypto/Dework/Upwork_logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672338028457"
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
                <th scope="row " className="b-right">
                  <p>Client Fee</p>
                </th>
                <td className="text-center b-right">2%</td>
                <td className="text-center">3%</td>
                <td className="text-center">3.5%</td>
                <td className="text-center">20%</td>
              </tr>
              <tr>
                <th scope="row" className="b-right">
                  <p>Freelancer Fee</p>{" "}
                </th>
                <td className="text-center b-right">10%</td>
                <td className="text-center">10%</td>
                <td className="text-center">20%</td>
                <td className="text-center">20%</td>
              </tr>
              <tr className="bg-blue">
                <th scope="row" className="b-right">
                  <p>Withdrawal Fee</p>
                </th>
                <td className="text-center b-right">Crypto/Instant</td>
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
                <th scope="row" className="b-right">Decentralized</th>
                <td className="green text-center b-right"><AiOutlineCheckCircle/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
              </tr>
              <tr className="bg-blue">
                <th scope="row" className="b-right">Content Ownership</th>
                <td className="green text-center b-right"><AiOutlineCheckCircle/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
              </tr>
              <tr>
                <th scope="row" className="b-right">Efficient Escrow</th>
                <td className="text-center b-right" >Yes</td>
                <td className="text-center">No/Partial</td>
                <td className="text-center">No/Partial</td>
                <td className="text-center">No/Partial</td>
              </tr>

              <tr className="bg-blue">
                <th scope="row" className="b-right">No Limit On Task Size</th>
                <td className="green text-center b-right"><AiOutlineCheckCircle/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
              </tr>

              <tr>
                <th scope="row" className="b-right">Scalable Dispute System</th>
                <td className="green text-center b-right"><AiOutlineCheckCircle/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
              </tr>

              <tr className="bg-blue">
                <th scope="row" className="b-right">NFT / Metaverse</th>
                <td className="green text-center b-right"><AiOutlineCheckCircle/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
              </tr>
              <tr>
                <th scope="row" className="b-right">Staff Recruitment</th>
                <td className="green text-center b-right"><AiOutlineCheckCircle/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
                <td className="text-center cross"><MdOutlineCancel/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
