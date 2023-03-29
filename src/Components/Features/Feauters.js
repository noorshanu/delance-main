import React from "react";
import "./Features.css";
import Dash from "../../assets/dash.svg";
import Buss from "../../assets/feature/buss.svg";
import Dollar from "../../assets/feature/doll.svg";
import Escrow from "../../assets/feature/owner.svg";
import Owner from "../../assets/feature/buss.svg";
import Pay from "../../assets/feature/pay.svg";
import Trans from "../../assets/feature/trans.svg";
import MobFeauters from "./MobFeauters";
import { useTranslation } from "react-i18next";
import TitleDash from "Components/TitleDash";
import FeatureCard from "Components/FeatureCard";
import useMediaQuery from "hooks/useMediaQuery";

const data = [
  {
    img: Buss,
    title: "Business Simplified",
    desc: "It only takes a minute to post a job or apply for one. No browser plugins, third-party apps, credit card details, or wallet-linking necessary. Fast, efficient and easy – the way blockchain is meant to be.",
  },
  {
    img: Trans,
    title: "Transparency",
    desc: "DeeLance has built an automated dispute system where all buyer and seller reputations are stored on the public blockchain. DeeLance is a trustworthy platform all stakeholders can rely.",
  },
  {
    img: Pay,
    title: "Fast Payments",
    desc: "Accept crypto as the compensation method for your services to benefit from fast payments. There’s no currency exchange risk or hefty commission rates to pay.",
  },

  {
    img: Escrow,
    title: "Ownership",
    desc: "DeeLance turns freelance work into digital tokens in the form of  NFTs. This helps make sure that recruiters get ownership of the work they're paying for, and protects against problems like payment fraud and copyright violations. Using NFTs also makes the freelance world more secure and reliable.",
  },
  {
    img: Owner,
    title: "Escrow",
    desc: "DeeLance uses secure escrow accounts to guarantee freelancers receive payment for services supplied. Our escrow system guarantees that employer funds are stored safely until the freelancer completes of the contracted work to the agreed specification and standard, at which time the funds are released. All agreements between transacting parties are based on smart contracts.",
  },
  {
    img: Dollar,
    title: "Low Fees",
    desc: "Our decentralized reputation and smart platform directly connects freelancers and employers in a peer to peer system. This means our freelance marketplace can charge much lower fees than legacy competitors because it directly connects employers and freelancers.",
  },
];

function Feauters() {
  const { t } = useTranslation("common");
  const isBellow768px = useMediaQuery("(max-width : 768px)");

  return (
    <section className="features">
      <div className="container text-center">
        <TitleDash title={`${t("Key")} ${t("Features")}`} className="mb-4" />
      </div>

      {isBellow768px ? (
        <MobFeauters data={data} />
      ) : (
        <div className="container desktop-feat">
          <div className="feat-container">
            {data.map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Feauters;
