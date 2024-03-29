import React from "react";
import MobWhyus from "./MobWhyus";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Dash from "../../assets/dash.svg";
import Dee from "../../assets/main-logo.svg";
import Fiver from "../../assets/fiver.png";
import Freelance from "../../assets/freela.png";
import Upwork from "../../assets/Upwork.png";
import "./Why.css";
import { useTranslation } from "react-i18next";
import TitleDash from "Components/TitleDash";

function WhyUs() {
  const { t } = useTranslation("common");

  const keys = [
    t("Client Fee"),
    t("Freelancer Fee"),
    t("Withdrawal Fee"),
    t("Decentralized"),
    t("Content Ownership"),
    t("Efficient Escrow"),
    t("No Limit on Task Size"),
    t("Scalable Dispute System"),
    t("NFT / Metaverse"),
    t("Staff Recruitment"),
  ];

  return (
    <section className="why-us">
      <MobWhyus keys={keys} />

      <div className="container desktop-box-why">
        <TitleDash
          className="text-center mt-4 mb-5"
          title={t("Why DeeLance?")}
        />

        <div className="why-us-box">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="b-right ht-101">
                  {" "}
                </th>
                <th
                  scope="col"
                  className="b-right"
                  style={{ background: "#111827" }}
                >
                  <div className="content-2">
                    <img src={Dee} alt="" />
                  </div>
                </th>
                <th scope="col">
                  <div className="content-2">
                    <img src={Freelance} alt="" />
                  </div>
                </th>
                <th scope="col">
                  <div className="content-2">
                    <img src={Upwork} alt="" />
                  </div>
                </th>
                <th scope="col">
                  <div className="content-2">
                    <img src={Fiver} alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue">
                <th scope="row " className="b-right">
                  <p className="t-head">{keys[0]}</p>
                </th>
                <td className="text-center b-right t-head">2%</td>
                <td className="text-center t-head">3%</td>
                <td className="text-center t-head">3.5%</td>
                <td className="text-center t-head">20%</td>
              </tr>
              <tr>
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[1]}</p>{" "}
                </th>
                <td className="text-center b-right t-head">10%</td>
                <td className="text-center t-head">10%</td>
                <td className="text-center t-head">20%</td>
                <td className="text-center t-head">20%</td>
              </tr>
              <tr className="bg-blue">
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[2]}</p>
                </th>
                <td className="text-center b-right t-head-2">Crypto/Instant</td>
                <td className="text-center t-head-2">
                  Min Payout $100
                  <p className="t-head-2">(2.75% Fee For Withdrawal For </p>
                  <p className="t-head-2">Currency Conversion)</p>
                </td>
                <td className="text-center t-head-2">
                  Min Payout $100
                  <p className="t-head-2"> (5% Fee For Withdrawal For </p>
                  <p className="t-head-2">Currency Conversion)</p>
                </td>
                <td className="text-center t-head-2">
                  Min Payout $100
                  <p className="t-head-2"> (5% Fee For Withdrawal For </p>
                  <p className="t-head-2">Currency Conversion)</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[3]}</p>
                </th>
                <td className="green text-center b-right">
                  <AiOutlineCheckCircle />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
              </tr>
              <tr className="bg-blue">
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[4]}</p>
                </th>
                <td className="green text-center b-right">
                  <AiOutlineCheckCircle />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
              </tr>
              <tr>
                <th scope="row" className="b-right">
                  <p className="t-head"> {keys[5]}</p>
                </th>
                <td className="text-center b-right t-head">Yes</td>
                <td className="text-center t-head">No/Partial</td>
                <td className="text-center t-head">No/Partial</td>
                <td className="text-center t-head">No/Partial</td>
              </tr>

              <tr className="bg-blue">
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[6]}</p>
                </th>
                <td className="green text-center b-right">
                  <AiOutlineCheckCircle />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
              </tr>

              <tr>
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[7]}</p>
                </th>
                <td className="green text-center b-right">
                  <AiOutlineCheckCircle />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
              </tr>

              <tr className="bg-blue">
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[8]}</p>
                </th>
                <td className="green text-center b-right">
                  <AiOutlineCheckCircle />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
              </tr>
              <tr>
                <th scope="row" className="b-right">
                  <p className="t-head">{keys[9]}</p>
                </th>
                <td className="green text-center b-right">
                  <AiOutlineCheckCircle />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
                <td className="text-center cross">
                  <MdOutlineCancel />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
