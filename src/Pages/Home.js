import React from "react";
import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Features from "../Components/Features/Feauters";
import Find from "../Components/Find/Find";
import Footer from "../Components/Footer/Footer";
import WhyUs from "../Components/WhyUs/WhyUs";
import Tokenomic from "Components/Token/Tokenomic";
import Raod from "Components/Roadmap/Raod";
import { Helmet } from "react-helmet";
import CookieConcent from "Components/CookieConcent";
import Warning from "Components/Common/Warning";
import SeenOn from "Components/SeenOn/SeenOn";
import FAQ from "layouts/Home/FAQ";
import DisclaimerHeader from "Components/DisclaimerHeader";
import PageLayout from "layouts/PageLayout";
import NewToCrypto from "Components/NewToCrypto";
import TransactionSuccesfullPopup from "Components/TransactionSuccesfullPopup";
import WhitepaperBanner from "sections/Home/WhitepaperBanner";
import SpecialPowers from "Components/SpecialPowers";

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content=" DeeLance is a Web3 based freelancing & recruitment platform that brings security, quickness and seamlessness 
          using the power of blockchain technology. "
        />
        <meta
          name="keywords"
          content="Freelance, fiver , upwork , jobs , NFT , content , marketing, freelancers, works , metaverse, web3, Binance,DeeLance,
                freelancer,upwork freelancer,Fiver,freelancer website,freelancer affiliate program,freelancer accounting jobs,freelancer app developer,account freelancer,best freelancer sites,become a freelancer on fiverr,freelancer customer service,freelance content writer,canva freelancer,freelancer digital marketer ,freelancer earning, 
                 jobs,indeed jobs, 
                  jobs near me, 
                jobs hiring near me,work from home jobs,jobs available near me,nft marketplace,nft marketplace list,nft marketplace ranking,nft marketplace crypto,nft marketplace github,nft marketplace website,nft marketplace aggregator,nft marketplace as a service,metaverse,metaverse meaning,facebook metaverse,mark zuckerberg metaverse,sandbox metaverse,how to invest in metaverse,metaverse game
                ,digital marketing,blockchain developer"
        />
        <meta
          name="description"
          content=" DeeLance is a next-gen freelancing platform based on blockchain. It resolves the challenges of copyright infringement, scams, delay in payments, etc. "
        />
        <meta http-equiv="Content-Type" content="text/html" />
        <title>Home</title>
      </Helmet>
      <div>
        <PageLayout>
          <div className="mb-80px">
            <Hero />
          </div>
          {/* 
          <div className="mb-100px">
            <SpecialPowers />
          </div> */}

          <div className="mb-80px">
            <SeenOn />
          </div>

          <div className="mb-100px">
            <Features />
          </div>

          <div className="mb-100px">
            <WhitepaperBanner />
          </div>

          <div id="about-us" className="mb-100px">
            <About />
          </div>

          <div className="mb-80px">
            <Find />
          </div>

          <div className="mb-100px">
            <WhyUs />
          </div>

          <div className="mb-80px">
            <Tokenomic />
          </div>

          <div className="mb-100px">
            <Raod />
          </div>

          <div className="mb-100px">
            <FAQ />
          </div>

          <NewToCrypto />
        </PageLayout>
      </div>
    </>
  );
}

export default Home;
