import React, { useState, useContext, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import "CSS/PresalePurchasingPopup.css";
import BaseButton from "./BaseButton";
import tokenDetails from "Constants/tokenDetails";
import useDelayUnmount from "hooks/useDelayUnmount";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import modalType, { tokenSymbols } from "Constants/modalType";
import { ethers } from "ethers";
import { TokenList } from "../Constants/Constants";
import { getProvider } from "@wagmi/core";
import UserContext from "../UserContext";
import { useTranslation } from "react-i18next";
import axios from "axios";
import TransitionWrapper from "./TransitionWrapper";
import TransactionSuccesfullPopup from "./TransactionSuccesfullPopup";
import LoadingButton from "./LoadingButton";

const Input = ({ OnMaxClick, handleFirstInputChange, maxa, disabled }) => {
  const { t } = useTranslation("common");

  return (
    <div className="purshasing-input">
      <input
        type="number"
        placeholder="0.00"
        onChange={handleFirstInputChange}
        ref={maxa}
        required
        disabled={disabled}
      />
      {OnMaxClick && (
        <BaseButton
          onClick={OnMaxClick}
          disabled={disabled}
          variant={1}
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {t("MAX")}
        </BaseButton>
      )}
    </div>
  );
};

const Header = ({ title, children }) => {
  return (
    <div className="purchasing-header d-flex justify-content-between">
      <p className="fs-18px weight-700 mb-0">{title}</p>

      <div>{children}</div>
    </div>
  );
};

const Eth = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="images/eth-circle.svg"
        style={{ width: "1.3rem", marginRight: ".4rem" }}
        alt=""
      />
      <p className="weight-700 fs-18px mb-0">ETH</p>
    </div>
  );
};

const USDT = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="images/usdt-circle.svg"
        style={{ width: "1.3rem", marginRight: ".4rem" }}
        alt=""
      />
      <p className="weight-700 fs-18px mb-0">USDT</p>
    </div>
  );
};

const DeeLance = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="images/deelance-logo.png"
        style={{ width: "2rem", marginRight: ".4rem" }}
        alt=""
      />
      <p className="weight-700 fs-18px mb-0">{tokenDetails.symbol}</p>
    </div>
  );
};

function PresalePurchasingPopup({
  purchasingModalType,
  setPurchasingModalType,
  onClose,
  isTransactionSuccesfull,
  setTransactionSuccessfull,
}) {
  const { t } = useTranslation("common");
  // const ModalRef = OutsideClickDetector(() => {
  //   setSecondInputValue(0);
  //   setPurchasingModalType(null);
  //   onClose();

  //   console.log("😁😁😁😁😁😁");
  //   console.log("😁😁😁😁😁😁");
  //   console.log("😁😁😁😁😁😁");
  //   console.log("issue");
  // });

  const handleClose = () => {
    onClose(); // Chiama la funzione onClose passata come prop
  };
  const [lastSymbol, setLastSymbol] = useState();
  const { connectWallet, contracts, account } = useContext(UserContext);
  const [balances, setBalances] = useState({ ETH: 0, USDT: 0 });
  const [bb, setBB] = useState(0);
  const [showComp, setShowComp] = useState(false);
  const tokenElement = useRef({ value: "" });
  const nftAmountElement = useRef();
  const usdAmountElement = useRef();
  const [somestate, setSomeState] = useState(false);
  const [selectedToken, setSelectedToken] = useState("ETH");
  const maxa = useRef();
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [thirdInputValue, setThirdInputValue] = useState(0);
  const [token, setToken] = useState();
  const [transactionData, setTransactionData] = useState(null);
  const [how, setHow] = useState(null);
  const [showApprove, setShowApprove] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [deelance, setDeelance] = useState(0);
  const [all, setAll] = useState(0);

  useEffect(() => {
    const getDeelance = async () => {
      console.log("Account wallet", account);
      const sa = await contracts.Main.userDeposits(account);
      const pric = sa / 1000000000000000000;
      console.log("Account balance deelance", pric);
      setDeelance(pric);
    };

    getDeelance();

    const getAllowan = async () => {
      const allowance = parseInt(
        await contracts["USDT"].allowance(account, contracts.Main.address),
        10
      );
      setAll(allowance);
    };

    const getETHBalance = async () => {
      const provider = getProvider();
      const balance = await provider.getBalance(account);
      return ethers.utils.formatEther(balance);
    };

    const getSomeState = async () => {
      setSomeState(true);
      console.log("fatto");
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
      console.log("success");

      if (token === "USDT") {
        setShowApprove(aaaa < 5 * 10 ** decimals);
      }

      return balance.div("1" + "0".repeat(decimals)).toNumber();
    };

    const getAllBalances = async () => {
      const balances = { ETH: await getETHBalance() };
      balances["USDT"] = await getTokenBalances("USDT");

      setBalances(balances);
    };

    getDeelance();
    getAllowan();
    getAllBalances();
    getSomeState();

    if (purchasingModalType === modalType.eth) {
      setToken("ETH");
      setBB(balances[token]);
      setLastSymbol(tokenSymbols.eth);
    } else if (purchasingModalType === modalType.usdt) {
      setToken("USDT");
      setBB(balances[token]);
      setLastSymbol(tokenSymbols.usdt);
    } else if (purchasingModalType === null) {
      setLastSymbol((val) => val);
    }
  }, [lastSymbol, purchasingModalType, account]);

  const getDeelance = async () => {
    const allowance = parseInt(
      await contracts["USDT"].allowance(account, contracts.Main.address),
      10
    );
    setAll(allowance);
    console.log("Account wallet", account);
    const sa = await contracts.Main.userDeposits(account);
    const pric = sa / 1000000000000000000;
    console.log("Account balance deelance", pric);
    setDeelance(pric);
  };

  const buyNFT = async (e) => {
    e.preventDefault();
    setTransactionLoading(true);

    if (!account) {
      return;
    }
    const nftAmount = nftAmountElement.current.value;

    if (secondInputValue == 0) {
      alert("$DLANCE to buy, can't be 0!");
      setTransactionLoading(false);
      return;
    }
    try {
      let transaction = null;
      const xx = await contracts.Main.salePrice();
      const xxx = ethers.utils.formatEther(xx);
      console.log(nftAmount * xxx);
      if (token == "ETH") {
        const ETHAmount = await contracts.Main.getETHAmount(
          ethers.utils.parseUnits(nftAmount.toString(), "wei").toString()
        );
        console.log(ETHAmount.toString());
        const g = ETHAmount.toString() / 1000000000000000000;
        setHow(g);
        console.log("ETH AMOUNT IN G", g);
        transaction = await contracts.Main.buyWithETH(nftAmount, {
          value: ETHAmount.toString(),
        });
      } else {
        const tokenAmount = await contracts.Main.getTokenAmount(
          nftAmount.toString(),
          0
        );
        const g = (tokenAmount / 1000000).toString();
        setHow(g);
        console.log("USDT AMOUNT IN G", g);
        const allowance = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );
        const requiredTokenAmount = tokenAmount.toString();

        if (allowance < 1) {
          const transaction = await contracts["USDT"].approve(
            contracts.Main.address,
            "10000000000000000000000000000000000000000000000000000000000"
          );

          if (await transaction.wait()) {
            alert("Allowance it's ok now! You can continue purchase!");
            const allowance = parseInt(
              await contracts["USDT"].allowance(
                account,
                contracts.Main.address
              ),
              10
            );
            setTransactionLoading(false);
            setAll(allowance);
            setSomeState(!somestate);
            return;
          } else {
            alert(
              "Something wrong with allowance... try to revoke allowance and try again!"
            );
            setTransactionLoading(false);
            return;
          }
        } else {
          console.log("SIIII", nftAmount.toString());
          transaction = await contracts.Main.buyWithUSD(nftAmount, 0);

          const errorCode = 0; // Define the errorCode variable here (change its value if needed)
          const xxff = {
            a: account,
          };

          window.dataLayer.push({
            event: "workflowStep",
            workflowName: "swap",
            workflowStepNumber: 2,
            workflowStepName: "confirmTransaction",
            workflowCompleteFlag: 0,
            workflowErrorCode: errorCode,
            walletAddress: xxff.a,
          });
        }
      }
      const currentUrl = window.location.href;
      const clickId = getClickIdFromUrl(currentUrl);
      console.log(clickId);
      const tx_result = await transaction.wait();

      const xxxx = {
        a: account,
      };
      getDeelance();
      const ev = deelance === 0 ? "conversion" : "revenue";
      await sendPayload(
        xxxx.a, // walletAddress
        token, // purchaseType
        secondInputValue.toString(),
        how, // purchaseTypeAmount
        thirdInputValue, // purchaseUsdAmount
        "826", // iid - replace with the appropriate value
        ev, // event
        clickId // clickId - replace with the appropriate value
      );

      // alert(`Successfully transaction! TX: ${tx_result.transactionHash}`);
      setTransactionSuccessfull({
        transactionHash: tx_result.transactionHash,
        amount: nftAmount.toString(),
        txResult: "transaction result",
      });

      const errorCode = 0; // Define the errorCode variable here (change its value if needed)
      const xxffa = {
        a: account,
      };

      window.dataLayer.push({
        event: "workflowStep",
        workflowName: "swap",
        workflowStepNumber: 3,
        workflowStepName: "swapSuccessful",
        workflowCompleteFlag: 1,
        workflowErrorCode: errorCode,
        walletAddress: xxffa.a,
        transactionId: tx_result.transactionHash,
        swapFromCurrency: token,
        swapFromValue: how,
        swapToCurrency: "$DLANCE",
        swapToValue: nftAmount.toString(),
      });

      setPurchasingModalType(null);
      console.log("transaction", tx_result.transactionHash);

      setPurchasingModalType(null);

      setSomeState(!somestate);
    } catch (error) {
      alert(
        "Error occured during transaction. Please check the browser console.\n" +
          error.reason
      );
      console.error("Transaction Error:", error.reason);
      setSomeState(!somestate);
    }

    setTransactionLoading(false);
  };

  const handleFirstInputChange = async (event) => {
    if (token === "USDT") {
      const inputValue = event.target.value;
      const pri = await contracts.Main.salePrice();
      const prezzo = ethers.utils.formatEther(pri);
      const priETH = parseInt(inputValue / prezzo, 10);
      console.log(priETH);
      setSecondInputValue(priETH);
      setThirdInputValue(inputValue);
    } else {
      const inputValue = event.target.value;
      const pri = await contracts.Main.salePrice();
      const prezzo = ethers.utils.formatEther(pri);
      const prezzo_ETH = await contracts.Main.getETHLatestPrice();
      const prezzo_ETH_formattato = ethers.utils.formatEther(prezzo_ETH);
      const mio_valore = inputValue * prezzo_ETH_formattato;
      const finale = parseInt(mio_valore / prezzo, 10);
      console.log(finale);
      setSecondInputValue(finale);
      setThirdInputValue(mio_valore.toFixed(2));
    }
  };

  const sendPayload = async (
    walletAddress,
    purchaseType,
    purchaseTokens,
    purchaseTypeAmount,
    purchaseUsdAmount,
    iid,
    event,
    clickId
  ) => {
    const payload = {
      walletAddress,
      purchaseType,
      purchaseTokens,
      purchaseTypeAmount,
      purchaseUsdAmount,
      iid,
      event,
      clickId,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 8c204353f83140b34023c4c6474491fe",
      },
    };

    try {
      const response = await axios.post(
        "https://api.dashfx.net/api/postback/presale",
        payload,
        config
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = response.data;
      console.log("API response:", data);
    } catch (error) {
      console.error("Error sending payload:", error);
    }
  };

  const OnMaxClick = async (e) => {
    e.preventDefault();
    console.log("PROVA", selectedToken);
    if (token === "ETH") {
      maxa.current.value = Math.max(balances.ETH);
    } else {
      maxa.current.value = Math.max(balances["USDT"]);
    }
    handleFirstInputChange({ target: { value: maxa.current.value } });
  };

  const chiudi = (e) => {
    setSecondInputValue(0);
    setPurchasingModalType(null);
    onClose();
  };

  const getClickIdFromUrl = (url) => {
    // Aggiornamento dell'espressione regolare per cercare "clickId=" seguito dal pattern desiderato
    const regex = /clickId=(fx_b\d+_\w+_\d+)/;
    const match = url.match(regex);

    if (match) {
      const clickId = match[1]; // Ora la variabile 'clickId' contiene il valore corrispondente al pattern

      return clickId;
    } else {
      // In caso di mancata corrispondenza, restituisci un valore predefinito o gestisci l'errore come desideri
      return null;
    }
  };

  return (
    <>
      <TransitionWrapper
        className="presale-purshasing-popup"
        open={Boolean(purchasingModalType)}
        setOpen={setPurchasingModalType}
      >
        <div>
          <header>
            <p className="fs-20px white weight-700 mb-0">EXCHANGE</p>
            <button className="white" onClick={() => chiudi()}>
              <IoClose />
            </button>
          </header>

          <main>
            <div className="eth-balance fs-16px mb-4">
              <img
                src={
                  lastSymbol === tokenSymbols.eth
                    ? "images/eth-circle.svg"
                    : "images/usdt-circle.svg"
                }
                alt=""
              />
              <p className="weight-700 mb-0">
                {lastSymbol} {t("Balance")}: {bb}
              </p>
            </div>

            <div className="mb-4">
              <div className="mb-4">
                <div className="mb-2">
                  <Header title={t("Selling")}>
                    {lastSymbol === tokenSymbols.eth ? <Eth /> : <USDT />}
                  </Header>
                </div>
                <Input
                  OnMaxClick={OnMaxClick}
                  maxa={maxa}
                  handleFirstInputChange={handleFirstInputChange}
                  disabled={transactionLoading}
                />
              </div>

              <div>
                <div className="mb-2">
                  <Header title={t("Buying")}>
                    <DeeLance />
                  </Header>
                </div>
                <div className="purshasing-input">
                  <input
                    type="number"
                    placeholder="0.00"
                    value={secondInputValue}
                    ref={nftAmountElement}
                    required
                    disabled={transactionLoading}
                  />
                </div>
              </div>
            </div>

            <LoadingButton
              onClick={buyNFT}
              loading={transactionLoading}
              style={{ width: "100%" }}
              className="text-center justify-content-center"
            >
              {token === "USDT" && all < 1 ? t("Approve") : t("Convert")}
            </LoadingButton>
          </main>
        </div>
      </TransitionWrapper>

      {/* <TransactionSuccesfullPopup
        open={isTransactionSuccesfull}
        setOpen={setTransactionSuccessfull}
        data={transactionData}
      /> */}
    </>
  );
}

export default PresalePurchasingPopup;
