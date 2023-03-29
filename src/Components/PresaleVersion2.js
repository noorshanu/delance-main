import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "CSS/PresaleVersion2.module.css";
import Fire from "assets/fire.webp";
import Bullet from "assets/de.webp";
import { useTranslation } from "react-i18next";
import tokenDetails from "Constants/tokenDetails";
import ConnectWalletBtn from "./ConnectWalletBtn";
import { useAccount } from "wagmi";
import BaseButton from "./BaseButton";
import PresalePurchasingPopup from "./PresalePurchasingPopup";
import modalType from "Constants/modalType";
import useMediaQuery from "hooks/useMediaQuery";
import OnRamp from "Components/Presale/onRamp";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import { ethers } from "ethers";
import { TokenList } from "../Constants/Constants";
import { getProvider } from "@wagmi/core";
import axios from "axios";
import TransactionSuccesfullPopup from "./TransactionSuccesfullPopup";
import ReferralLinkPopup from "./ReferralLinkPopup";

const Input = ({ referralLink, children, icon, ...props }) => {
  const { t } = useTranslation("common");

  return (
    <div className="purshasing-input">
      <input type="text" placeholder={referralLink} value={referralLink} />
    </div>
  );
};
const Button = ({ children, icon, ...props }) => {
  const isBellow768px = useMediaQuery("(max-width : 768px)");

  return (
    <BaseButton
      fontSize="fs-16px"
      style={{
        width: "100%",
        maxWidth: "26rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      {...props}
    >
      {icon && (
        <div
          style={{
            textAlign: "left",
            width: isBellow768px ? "1.2em" : "1.6em",
            maxWidth: isBellow768px ? "1.2em" : "1.6em",
            minWidth: isBellow768px ? "1.2em" : "1.6em",
          }}
        >
          {icon}
        </div>
      )}

      <span
        style={{
          flex: 1,
          display: "block",
          fontSize: isBellow768px ? "12px" : "inherit",
        }}
      >
        {children}
      </span>

      {icon && !isBellow768px ? (
        <span style={{ display: "block", width: "1.6em" }}></span>
      ) : null}
    </BaseButton>
  );
};

const Button2 = ({ children, icon, ...props }) => {
  const isBellow768px = useMediaQuery("(max-width : 768px)");

  return (
    <BaseButton
      fontSize="fs-16px"
      style={{
        width: "50%",
        maxWidth: "26rem",
      }}
      {...props}
    >
      <span
        style={{
          flex: 1,
          display: "block",
          fontSize: isBellow768px ? "12px" : "inherit",
        }}
      >
        {children}
      </span>

      {icon && !isBellow768px ? (
        <span style={{ display: "block", width: "1.6em" }}></span>
      ) : null}
    </BaseButton>
  );
};

const PorgressBar = ({ percantage, total, inSale, t }) => {
  return (
    <div>
      <div className="fill-bar mb-3">
        <div className="fill-bar-progress" style={{ width: `${percantage}%` }}>
          <div className="fire-and-bullet">
            <img src={Fire} alt="" className="fire" />
            <img src={Bullet} alt="" className="bullet" />
          </div>
        </div>
      </div>

      {/* <p className="text-center white mb-0">
        <span>
          {t("Progress")} {percantage}%
        </span>{" "}
        <span className="white">
          {" "}
          (
          <span className="green">
            {" "}
            $ {(total - inSale).toLocaleString("en-US")}{" "}
          </span>{" "}
          / $ {total.toLocaleString("en-US")} ){" "}
        </span>
      </p> */}
    </div>
  );
};

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="white presale-timer">
      <div>
        <div className="weight-800 time-number">{days}</div>
        <div className="timer-day">Days</div>
      </div>
      <div className="timer-separator">:</div>
      <div>
        <div className="weight-800 time-number">{hours}</div>
        <div className="timer-day">Hours</div>
      </div>
      <div className="timer-separator">:</div>
      <div>
        <div className="weight-800 time-number">{minutes}</div>
        <div className="timer-day">Minutes</div>
      </div>
      <div className="timer-separator">:</div>
      <div>
        <div className="weight-800 time-number">{seconds}</div>
        <div className="timer-day">Seconds</div>
      </div>
    </div>
  );
};

function PresaleVersion2() {
  const [percantage, setPercantage] = useState(0);
  const { t } = useTranslation("common");
  const { address } = useAccount();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [total, setTotal] = useState(0);
  const [inSale, setInSale] = useState(0);
  const [purchasingModalType, setPurchasingModalType] = useState(null);
  const [isModal2, setIsModal2] = useState(false);
  const provider = getProvider();

  const { connectWallet, contracts, account } = useContext(UserContext);
  const [balances, setBalances] = useState({ ETH: 0 });
  const [prices, setPrices] = useState(0);
  const [nextprices, setPricesnext] = useState(0);
  const [deelance, setDeelance] = useState(0);
  const [round, setRound] = useState(0);
  const [alertShown, setAlertShown] = useState(false);
  const [somestate, setSomeState] = useState(false);
  const [aa, setNetwork] = useState();
  const [claimDisabled, setClaimDisabled] = useState(true);
  const [condition, setCondition] = useState({ condition: true });
  const [referralLink, setReferralLink] = useState("");
  const [isTransactionSuccesfull, setTransactionSuccessfull] = useState(false);
  const [referralPopupOpen, setReferralPopupOpen] = useState(false);

  // console.log("presale version 2, re-rendering");

  const buyCard = async (e) => {
    setIsModal2(true);
  };

  const handlePopupClose = () => {
    setSomeState(!somestate);
  };

  useEffect(() => {
    if (!account) {
      setTotal("0");
      setPercantage("0");

      const countdownDate = new Date("2023-04-16T00:00:00").getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        if (distance < 0) {
          clearInterval(interval);
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);

      const getPr = async () => {
        const pri = await contracts.Main.salePrice();
        const prinext = await contracts.Main.nextPrice();
        const myString = ethers.utils.formatEther(pri);
        const myStringnext = ethers.utils.formatEther(prinext);
        const a = Number(myString).toFixed(3);
        const b = Number(myStringnext).toFixed(3);
        const sa = ethers.utils.formatEther(
          await contracts.Main.inSaleUSDvalue()
        );
        const xa = await contracts.Main.hardcapsizeUSD();
        setPrices(a);
        setPricesnext(b);
        setInSale(sa);
        setTotal(xa);
        setPercantage((((xa - sa) / xa) * 100).toFixed(2));
      };
      getPr();
    } else {
      handleClickReferralLink();

      const countdownDate = new Date("2023-04-16T00:00:00").getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        if (distance < 0) {
          clearInterval(interval);
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);

      /*       const getETHBalance = async () => {
        const balance = await provider.getBalance(account);
        return ethers.utils.formatEther(balance);
      }; */

      const getSomeState = async () => {
        setSomeState(true);
        getDeelance();
        console.log("fatto");
      };

      const getDeelance = async () => {
        console.log("Account wallet", account);
        const sa = await contracts.Main.userDeposits(account);
        const pric = sa / 1000000000000000000;
        console.log("Account balance deelance", pric);
        setDeelance(pric);
      };

      /*       const getClaimStatus = async () => {
        const sa = await contracts.Main.claimStart();
        if (sa == 0) {
          setClaimDisabled(true);
        } else {
          setClaimDisabled(false);
        }
      }; */

      const getSaleProgress = async () => {
        const pri = await contracts.Main.salePrice();
        const prinext = await contracts.Main.nextPrice();
        const myString = ethers.utils.formatEther(pri);
        const myStringnext = ethers.utils.formatEther(prinext);
        const a = Number(myString).toFixed(3);
        const b = Number(myStringnext).toFixed(3);
        const sa = ethers.utils.formatEther(
          await contracts.Main.inSaleUSDvalue()
        );
        const xa = await contracts.Main.hardcapsizeUSD();
        setPrices(a);
        setPricesnext(b);
        setInSale(sa);
        setTotal(xa);
        setPercantage((((xa - sa) / xa) * 100).toFixed(2));
      };

      /*       const getTokenBalances = async (token) => {
        console.log(token, " getting balance");
        const balance = await contracts["USDT"].balanceOf(account);
        const decimals = (await contracts["USDT"].decimals()).toNumber();
        const aaaa = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );
        console.log("CIAO", aaaa);
        if (aaaa < 0) {
          setCondition(true);
        } else {
          setCondition(false);
        }
        console.log("success");
        return balance.div("1" + "0".repeat(decimals)).toNumber();
      };
      const getAllBalances = async () => {
        const balances = { ETH: await getETHBalance() };
        for (const token of TokenList) {
          balances[token] = await getTokenBalances(token);
        }
        setBalances(balances);
      }; */

      const handlePopupClose = () => {
        getSaleProgress();
        getDeelance();
        getSomeState();
      };

      getSaleProgress();
      getDeelance();
      getSomeState();
      /* getClaimStatus(); */
    }
  }, [account, somestate]);

  const generateReferralLink = async (walletAddress, iid) => {
    const apiDomain = "https://api.dashfx.net";
    const apiUrl = "/api/publisher/presale";
    const apiToken = "8c204353f83140b34023c4c6474491fe";

    const config = {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    };

    const payload = {
      walletAddress,
      iid,
    };

    console.log("Payload:", payload); // Log the payload to verify the values

    try {
      const response = await axios.post(apiDomain + apiUrl, payload, config);
      const url = response.data.data.url;
      console.log("LINK FOR REF", url);
      console.log("RESPONSE FOR REF", response);
      setReferralLink(url);
    } catch (error) {
      console.error("Error generating referral link:", error);
    }
  };

  const handleClickReferralLink = () => {
    const xx = {
      a: account,
    };
    const walletAddress = xx.a; // Replace with the desired walletAddress
    const iid = "826"; // Replace with the desired iid
    console.log("ACCOUNT IN HANDLE", account);
    generateReferralLink(walletAddress, iid);
  };

  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  return (
    <div className={styles.wrapper}>
      <p className="white text-center weight-700 fs-16px mb-2 logo-plus-title">
        <img src="images/deelance-logo.png" className="dee-logo" />
        <span>1 {tokenDetails.symbol} = $0.025 USDT</span>
        <img src="images/etheruem-logo.png" className="presale-eth" />
      </p>
      <p
        className="white text-center weight-700 opacity-0_8 fs-16px"
        style={{ marginBottom: "2em" }}
      >
        {t("USDT Raised")}{" "}
        <span className="green-light">
          {/* ${(total - inSale).toLocaleString("en-US")} */}$0
        </span>{" "}
        {/* / <span className="green-light">${total.toLocaleString("en-US")}</span> */}
        / <span className="green-light">$1,500,000</span>
      </p>
      <div className="mb-4">
        <div className="mb-4">
          <Timer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>

        <p className="text-center white weight-700">
          {t("Until Price Increase To")} $0.027 USDT
        </p>
      </div>
      <PorgressBar
        percantage={percantage}
        total={total}
        inSale={inSale}
        t={t}
      />
      {!address ? (
        <div className="mt-4 d-flex justify-content-center">
          <div style={{ maxWidth: "20rem", width: "100%" }}>
            <ConnectWalletBtn normal={true} />
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <p className="fs-16px white weight-700 text-center mb-4">
            {t("Your purchased")}{" "}
            <span className="green-light">{tokenDetails.symbol}</span> ={" "}
            {deelance}
          </p>

          <div
            className="d-flex align-items-center mb-4"
            style={{ flexDirection: "column" }}
          >
            <Button
              className="mb-3"
              onClick={() => {
                setPurchasingModalType(modalType.eth);
                handlePopupClose();
              }}
              icon={
                <img
                  src="images/eth-circle.svg"
                  style={{ width: "100%" }}
                  alt=""
                />
              }
            >
              <span>
                {t("Buy")} {tokenDetails.symbol} {t("With")} ETH
              </span>
            </Button>
            <Button
              onClick={() => {
                setPurchasingModalType(modalType.usdt);
                handlePopupClose();
              }}
              className="mb-3"
              icon={
                <img
                  src="images/usdt-circle.svg"
                  style={{ width: "100%" }}
                  alt=""
                />
              }
            >
              {t("Buy")} {tokenDetails.symbol} {t("With")} USDT
            </Button>

            {/* <div className="d-flex justify-content-center"> */}
            <Button variant={1} onClick={buyCard} className="mb-3">
              {t("Buy With Card")}
            </Button>
            {/* </div> */}
            {/* <Input referralLink={referralLink}></Input> */}

            <Button
              onClick={() => setReferralPopupOpen(true)}
              icon={
                <img
                  src="images/referal-link.png"
                  style={{ width: "100%", filter: "brightness(0)" }}
                  alt=""
                />
              }
            >
              {/* {t("COPY")} */}
              {t("Referal Link")}
            </Button>

            {/* <Button2
              className="hero-btn-2 fs-18px undefined"
              onClick={() => {
                copyToClipboard(referralLink);
                alert("Referral link copied to clipboard");
              }}
              icon={
                <img
                  src="images/referal-link.png"
                  style={{ width: "100%", filter: "brightness(0)" }}
                  alt=""
                />
              }
            >
              {t("COPY")}
            </Button2> */}
          </div>

          {/*   <p className="fs-16px white weight-700 text-center">
            Next Stage:{" "}
            <span className="green-light">{tokenDetails.symbol}</span> = ${prices.toLocaleString("en-US")} USDT
          </p> */}
        </div>
      )}
      <div className="d-flex justify-content-center mt-3">
        <Link
          to="/en/how-to-buy"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          {t("How To Buy")}
        </Link>{" "}
      </div>

      <PresalePurchasingPopup
        purchasingModalType={purchasingModalType}
        setPurchasingModalType={setPurchasingModalType}
        onClose={handlePopupClose}
        isTransactionSuccesfull={isTransactionSuccesfull}
        setTransactionSuccessfull={setTransactionSuccessfull}
      />

      <TransactionSuccesfullPopup
        open={Boolean(isTransactionSuccesfull)}
        data={isTransactionSuccesfull}
        setOpen={setTransactionSuccessfull}
      />

      <ReferralLinkPopup
        open={referralPopupOpen}
        setOpen={setReferralPopupOpen}
        referralLink={referralLink}
      />

      {!address && (
        <div className="mt-3">
          <p className="text-center white mb-1">{t("Launch Price")}</p>
          <p className="text-center white mb-0">
            1 {tokenDetails.symbol} = $0.030 USDT
          </p>
        </div>
      )}
      {isModal2 && <OnRamp setIsModal2={setIsModal2} />}
    </div>
  );
}

export default PresaleVersion2;
