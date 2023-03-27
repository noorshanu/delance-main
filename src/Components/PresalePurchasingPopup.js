import React, { useState, useContext, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import "CSS/PresalePurchasingPopup.css";
import BaseButton from "./BaseButton";
import tokenDetails from "Constants/tokenDetails";
import useDelayUnmount from "hooks/useDelayUnmount";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import Portal from "./Portal";
import modalType, { tokenSymbols } from "Constants/modalType";
import { ethers } from "ethers";
import { TokenList } from "../Constants/Constants";
import { getProvider } from "@wagmi/core";
import UserContext from "../UserContext";
import { useTranslation } from "react-i18next";

const Input = ({ OnMaxClick, handleFirstInputChange, maxa }) => {
  const { t } = useTranslation("common");

  return (
    <div className="purshasing-input">
      <input
        type="number"
        placeholder="0.00"
        onChange={handleFirstInputChange}
        ref={maxa}
        required
      />
      {OnMaxClick && (
        <BaseButton
          onClick={OnMaxClick}
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

const Deelance = () => {
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
  onClose
}) {
  const { t } = useTranslation("common");
  const shouldRender = useDelayUnmount(Boolean(purchasingModalType), 300);
  const ModalRef = OutsideClickDetector(() => {
    setPurchasingModalType(null);
    onClose();
  });
  const handleClose = () => {
    onClose(); // Chiama la funzione onClose passata come prop
  };
  const [lastSymbol, setLastSymbol] = useState();
  const { connectWallet, contracts, account } = useContext(UserContext);
  const [balances, setBalances] = useState({ ETH: 0 });
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

  useEffect(() => {
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
      console.log(token, " getting balance");
      const balance = await contracts[token].balanceOf(account);
      const decimals = (await contracts[token].decimals()).toNumber();
      const aaaa = parseInt(
        await contracts["USDT"].allowance(account, contracts.Main.address),
        10
      );
      console.log("CIAO", aaaa);
      console.log("success");
      return balance.div("1" + "0".repeat(decimals)).toNumber();
    };

    const getAllBalances = async () => {
      const balances = { ETH: await getETHBalance() };
      for (const token of TokenList) {
        balances[token] = await getTokenBalances(token);
      }
      setBalances(balances);
    };

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

  const buyNFT = async (e) => {
    e.preventDefault();

    if (!account) {
      return;
    }
    const nftAmount = nftAmountElement.current.value;

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

        transaction = await contracts.Main.buyWithETH(nftAmount, {
          value: ETHAmount.toString(),
        });
      } else {
        const tokenAmount = await contracts.Main.getTokenAmount(
          nftAmount.toString(),
          0
        );
        const b = parseInt(
          await contracts["USDT"].allowance(account, contracts.Main.address),
          10
        );
        const requiredTokenAmount = tokenAmount.toString();
        if (b < requiredTokenAmount) {
          console.log("sono qui");
          transaction = await contracts["USDT"].approve(
            contracts.Main.address,
            "10000000000000000000000000000000000000000000000000000000000"
          );
        } else {
          console.log("SIIII", nftAmount.toString());
          transaction = await contracts.Main.buyWithUSD(nftAmount, 0);
        }
      }
      const tx_result = await transaction.wait();
      alert(`Successfully transaction! TX: ${tx_result.transactionHash}`);
      console.log("transaction", tx_result.transactionHash);
      setSomeState(!somestate);
    } catch (error) {
      alert(
        "Error occured during transaction. Please check the browser console.\n" +
          error.reason
      );
      console.error("Transaction Error:", error.reason);
      setSomeState(!somestate);
    }
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
    setPurchasingModalType(null)
    onClose();
  }
  return (
    <>
      {shouldRender && (
        <Portal>
          <div
            ref={ModalRef}
            style={{ zIndex: 100000000 }}
            className={`presale-purshasing-popup ${
              Boolean(purchasingModalType) ? "mount" : "unmount"
            }`}
          >
            <header>
              <p className="fs-20px white weight-700 mb-0">EXCHANGE</p>
              <button
                className="white"
                onClick={() => chiudi()}
              >
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
                  />
                </div>

                <div>
                  <div className="mb-2">
                    <Header title={t("Buying")}>
                      <Deelance />
                    </Header>
                  </div>
                  <div className="purshasing-input">
                    <input
                      type="number"
                      placeholder="0.00"
                      value={secondInputValue}
                      ref={nftAmountElement}
                      required
                    />
                  </div>
                </div>
              </div>

              <BaseButton onClick={buyNFT} style={{ width: "100%" }}>
                {t("Convert")}
              </BaseButton>
            </main>
          </div>
        </Portal>
      )}

      <Portal>
        <div
          className={`black-screen ${Boolean(purchasingModalType) && "show"}`}
          style={{ zIndex: 100000 }}
        ></div>
      </Portal>
    </>
  );
}

export default PresalePurchasingPopup;
