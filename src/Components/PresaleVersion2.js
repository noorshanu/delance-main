import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "CSS/PresaleVersion2.module.css";
import Fire from "assets/fire.webp";
import Bullet from "assets/de.webp";
import { useTranslation } from "react-i18next";
import tokenDetails from "Constants/tokenDetails";
import ConnectWalletBtn from "./ConnectWalletBtn";
import { useAccount, useBalance, useContractRead } from "wagmi";
import BaseButton from "./BaseButton";
import PresalePurchasingPopup from "./PresalePurchasingPopup";
import modalType from "Constants/modalType";
import useMediaQuery from "hooks/useMediaQuery";
import OnRamp from "Components/Presale/onRamp";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import { ethers } from "ethers";
import { ContractAddr, TokenList } from "../Constants/Constants";
import { getProvider, fetchBalance } from "@wagmi/core";
import axios from "axios";
import TransactionSuccesfullPopup from "./TransactionSuccesfullPopup";
import ReferralLinkPopup from "./ReferralLinkPopup";
import { to } from "utils/RouterUtils";
import { BEP20ABI, BigNFTABI } from "Constants/ABI";

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

const Timer = ({ account, somestate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!account) {
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
    } else {
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
    }
  }, [account, somestate]);

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

const PresaleVersion2 = () => {
  const [percantage, setPercantage] = useState(0);
  const { t } = useTranslation("common");
  const { address } = useAccount();

  const [total, setTotal] = useState(0);
  const [inSale, setInSale] = useState(0);
  const [purchasingModalType, setPurchasingModalType] = useState(null);
  const [isModal2, setIsModal2] = useState(false);
  const provider = getProvider();

  const { connectWallet, contracts, account } = useContext(UserContext);
  const [balances, setBalances] = useState({ ETH: 0, USDT: 0 });
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
  const { data: ETHBalance } = useBalance({
    address,
    formatUnits: "ether",
    watch: true,
    enabled: address ? true : false,
  });
  const { data: USDTBalance } = useContractRead({
    address: ContractAddr.USDT,
    abi: BEP20ABI,
    functionName: "balanceOf",
    args: [address],
    watch: true,
    enabled: address ? true : false,
  });

  const ethDecimals = 1000000000000000000;

  // console.log("presale version 2, re-rendering");

  const handleConnectWalletClick = async () => {
    try {
      await connectWallet();
      setSomeState(!somestate);
      // getSaleProgress();
      // getDeelance();
      // getAllBalances();
      // getTokenBalances();
      // getETHBalance();
      const errorCode = 0; // Define the errorCode variable here (change its value if needed)
      window.dataLayer.push({
        event: "workflowStep",
        workflowName: "connectWallet",
        workflowStepNumber: 1,
        workflowStepName: "start",
        workflowCompleteFlag: 0,
        workflowErrorCode: errorCode, // Use the variable here
      });
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const buyCard = async (e) => {
    const errorCode = 0; // Define the errorCode variable here (change its value if needed)
    const xxff = {
      a: account,
    };
    window.dataLayer.push({
      event: "workflowStep",
      workflowName: "swap",
      workflowStepNumber: 1,
      workflowStepName: "swapAmount",
      workflowCompleteFlag: 0,
      workflowErrorCode: errorCode,
      walletAddress: address,
    });

    setIsModal2(true);
  };

  const handlePopupClose = () => {
    setSomeState(!somestate);
  };

  // const sendingConnection = async (walletAddress, iid) => {
  //   const event = "lead_success";
  //   const currentUrl = window.location.href;
  //   const clickId = getClickIdFromUrl(currentUrl);
  //   const payload = {
  //     walletAddress,
  //     iid,
  //     event,
  //     clickId,
  //   };

  //   console.log("SENDING CONNECTION");
  //   console.log("PAYLOAD PER SENDING", payload);
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer 8c204353f83140b34023c4c6474491fe",
  //     },
  //   };

  //   try {
  //     const response = await axios.post(
  //       "https://api.dashfx.net/api/postback/presale",
  //       payload,
  //       config
  //     );

  //     if (response.status !== 200) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = response.data;
  //     console.log("FUNZIONA");
  //     console.log("API response SENDING:", data);
  //   } catch (error) {
  //     console.error("Error sending payload:", error);
  //   }
  // };

  // const getETHBalance = async () => {
  //   // const provider = getProvider();
  //   const balance = await provider.getBalance(account);
  //   console.log("ETH BALANCE", ethers.utils.formatEther(balance));
  //   return ethers.utils.formatEther(balance);
  // };

  // const getTokenBalances = async (token) => {
  //   console.log(token, " getting balance");
  //   const balance = await contracts["USDT"].balanceOf(account);
  //   const decimals = (await contracts["USDT"].decimals()).toNumber();
  //   const aaaa = parseInt(
  //     await contracts["USDT"].allowance(account, contracts.Main.address),
  //     10
  //   );
  //   console.log("CIAO", aaaa);
  //   // if (aaaa < 0) {
  //   //   setCondition(true);
  //   // } else {
  //   //   setCondition(false);
  //   // }
  //   console.log("success");
  //   return balance.div("1" + "0".repeat(decimals)).toNumber();
  // };

  // const getAllBalances = async () => {
  //   const balance = await fetchBalance({
  //     address: address,
  //     token: ContractAddr.USDT,
  //     formatUnits: "gwei",
  //   });

  //   const balanceETH = await fetchBalance({
  //     address: address,
  //     formatUnits: "gwei",
  //   });

  //   setBalances({
  //     ETH: balanceETH.value.toString(),
  //     USDT: balance.value.toString(),
  //   });
  // };

  // const getDeelance = async () => {
  //   console.log("Account wallet", account);
  //   const sa = await contracts.Main.userDeposits(account);
  //   const pric = sa / 1000000000000000000;
  //   console.log("Account balance deelance", pric);
  //   setDeelance(pric);
  // };

  const { data: userDeposites, errorDeposites } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    functionName: "userDeposits",
    args: [address],
    watch: true,
  });

  // const getSaleProgress = async () => {
  //   const pri = await contracts.Main.salePrice();
  //   const prinext = await contracts.Main.nextPrice();
  //   const myString = ethers.utils.formatEther(pri);
  //   const myStringnext = ethers.utils.formatEther(prinext);
  //   const a = Number(myString).toFixed(3); // Number(ethers.utils.formatEther(salePrice)).toFixed(3)
  //   const b = Number(myStringnext).toFixed(3);
  //   const sa = ethers.utils.formatEther(await contracts.Main.inSaleUSDvalue());
  //   const xa = await contracts.Main.hardcapsizeUSD();
  //   setPrices(a);
  //   setPricesnext(b);
  //   setInSale(sa);
  //   setTotal(xa);
  //   setPercantage((((xa - sa) / xa) * 100).toFixed(2));
  // };

  const getSomeState = async () => {
    setSomeState(true);
    // getDeelance();
    console.log("fatto");
  };

  const generateReferralLink = async (walletAddress, iid) => {
    // await sendingConnection(
    //   walletAddress, // walletAddress
    //   iid
    // );

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

  // const getClickIdFromUrl = (url) => {
  //   // Aggiornamento dell'espressione regolare per cercare "clickId=" seguito dal pattern desiderato
  //   const regex = /clickId=(fx_b\d+_\w+_\d+)/;
  //   const match = url.match(regex);

  //   if (match) {
  //     const clickId = match[1]; // Ora la variabile 'clickId' contiene il valore corrispondente al pattern

  //     return clickId;
  //   } else {
  //     // In caso di mancata corrispondenza, restituisci un valore predefinito o gestisci l'errore come desideri
  //     return null;
  //   }
  // };

  const { data: salePrice } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    watch: true,
    functionName: "salePrice",
  });

  const { data: nextPrice } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    watch: true,
    functionName: "nextPrice",
  });

  const { data: inSaleUSDvalue } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    watch: true,
    functionName: "inSaleUSDvalue",
  });

  const { data: hardcapsizeUSD } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    watch: true,
    functionName: "hardcapsizeUSD",
  });

  const getSaleProgress = async () => {
    const pri = await contracts.Main.salePrice();
    const prinext = await contracts.Main.nextPrice();
    const myString = ethers.utils.formatEther(pri);
    const myStringnext = ethers.utils.formatEther(prinext);
    const a = Number(myString).toFixed(3);
    const b = Number(myStringnext).toFixed(3);
    const sa = ethers.utils.formatEther(await contracts.Main.inSaleUSDvalue());
    const xa = await contracts.Main.hardcapsizeUSD();
    setPrices(a);
    setPricesnext(b);
    setInSale(sa);
    setTotal(xa);
    setPercantage((((xa - sa) / xa) * 100).toFixed(2));
  };

  useEffect(() => {
    // getSaleProgress();

    if (!address) {
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
      const errorCode = 0; // No error

      window.dataLayer.push({
        event: "workflowStep",
        workflowName: "connectWallet",
        workflowStepNumber: 2,
        workflowStepName: "successful",
        workflowCompleteFlag: 1,
        walletAddress: address,
        workflowErrorCode: errorCode,
      });

      /*       const getETHBalance = async () => {
        const balance = await provider.getBalance(account);
        return ethers.utils.formatEther(balance);
      }; */

      // const getDeelance = async () => {
      //   console.log("Account wallet", account);
      //   const sa = await contracts.Main.userDeposits(account);
      //   const pric = sa / 1000000000000000000;
      //   console.log("Account balance deelance", pric);
      //   setDeelance(pric);
      // };

      /*       const getClaimStatus = async () => {
        const sa = await contracts.Main.claimStart();
        if (sa == 0) {
          setClaimDisabled(true);
        } else {
          setClaimDisabled(false);
        }
      }; */

      /*   const getETHBalance = async () => {
        const provider = getProvider();
        const balance = await provider.getBalance(account);
        return ethers.utils.formatEther(balance);
      };
    
           const getTokenBalances = async (token) => {
        console.log("USDT", " getting balance");
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
          balances["USDT"] = await getTokenBalances("USDT");
        }
        setBalances(balances);
      }; 
 */

      /*    getAllBalances();
      getTokenBalances(); */
      // getDeelance();
      getSomeState();
      /* getClaimStatus(); */
    }
  }, [address, account, somestate]);

  useEffect(() => {
    // getSaleProgress();

    if (address) {
      generateReferralLink(address, "826");
    }
  }, [address]);

  // useEffect(() => {
  //   getSaleProgress();
  // }, []);

  // useEffect(() => {
  //   getAllBalances();
  // });

  // LAG ISSUE

  return (
    <div className={styles.wrapper}>
      <p className="white text-center weight-700 fs-16px mb-2 logo-plus-title">
        <img src="images/deelance-logo.png" alt="img" className="dee-logo" />
        <span>
          1 {tokenDetails.symbol} = $
          {salePrice
            ? Number(ethers.utils.formatEther(salePrice))
                .toFixed(3)
                .toLocaleString("en-US")
            : 0}{" "}
          USDT
        </span>
        <img src="images/etheruem-logo.png" alt="img" className="presale-eth" />
      </p>
      <p
        className="white text-center weight-700 opacity-0_8 fs-16px"
        style={{ marginBottom: "2em" }}
      >
        {t("USDT Raised")}{" "}
        {hardcapsizeUSD && inSaleUSDvalue ? (
          <span className="green-light">
            {(
              parseFloat(
                hardcapsizeUSD - ethers.utils.formatEther(inSaleUSDvalue)
              ).toFixed(2) * 1
            ).toLocaleString("en-US")}
          </span>
        ) : null}{" "}
        /{" "}
        <span className="green-light">
          $
          {parseInt(hardcapsizeUSD ? hardcapsizeUSD : 0).toLocaleString(
            "en-US"
          )}
        </span>
      </p>
      <div className="mb-4">
        <div className="mb-4">
          <Timer account={address} somestate={somestate} />
        </div>

        <p className="text-center white weight-700 fs-16px">
          {t("Until Price Increase To")} $
          {nextPrice
            ? Number(ethers.utils.formatEther(nextPrice))
                .toFixed(3)
                .toLocaleString("en-US")
            : 0}{" "}
          USDT
        </p>
      </div>
      <PorgressBar
        percantage={parseInt(percantage)}
        total={total}
        inSale={inSale}
        t={t}
      />
      {!address ? (
        <div className="mt-4 d-flex justify-content-center">
          <div style={{ maxWidth: "20rem", width: "100%" }}>
            <ConnectWalletBtn
              onClick={handleConnectWalletClick}
              normal={true}
            />
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <p className="fs-16px white weight-700 text-center mb-4">
            {t("Your purchased")}{" "}
            <span className="green-light">{tokenDetails.symbol}</span> ={" "}
            {userDeposites ? userDeposites / ethDecimals : 0}
          </p>

          <div
            className="d-flex align-items-center mb-4"
            style={{ flexDirection: "column" }}
          >
            <Button
              className="mb-3"
              onClick={() => {
                const errorCode = 0; // Define the errorCode variable here (change its value if needed)
                const xxff = {
                  a: account,
                };
                window.dataLayer.push({
                  event: "workflowStep",
                  workflowName: "swap",
                  workflowStepNumber: 1,
                  workflowStepName: "swapAmount",
                  workflowCompleteFlag: 0,
                  workflowErrorCode: errorCode,
                  walletAddress: address,
                });
                // getAllBalances();
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
                const errorCode = 0; // Define the errorCode variable here (change its value if needed)
                const xxff = {
                  a: account,
                };
                window.dataLayer.push({
                  event: "workflowStep",
                  workflowName: "swap",
                  workflowStepNumber: 1,
                  workflowStepName: "swapAmount",
                  workflowCompleteFlag: 0,
                  workflowErrorCode: errorCode,
                  walletAddress: address,
                });
                // getAllBalances();
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
          to={to("/how-to-buy")}
          target="_blank"
          className="fs-16px"
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
        USDTBalance={USDTBalance}
        ETHBalance={ETHBalance}
        salePrice={salePrice}
        nextPrice={nextPrice}
        inSaleUSDvalue={inSaleUSDvalue}
        hardcapsizeUSD={hardcapsizeUSD}
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
          <p className="text-center white fs-16px mb-1">{t("Launch Price")}</p>
          <p className="text-center white fs-16px mb-0">
            1 {tokenDetails.symbol} = $0.037 USDT
          </p>
        </div>
      )}
      {isModal2 && <OnRamp setIsModal2={setIsModal2} />}
    </div>
  );
};

export default PresaleVersion2;
