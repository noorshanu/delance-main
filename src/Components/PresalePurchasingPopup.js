import React, { useState, useContext, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import "CSS/PresalePurchasingPopup.css";
import BaseButton from "./BaseButton";
import tokenDetails from "Constants/tokenDetails";
import useDelayUnmount from "hooks/useDelayUnmount";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import modalType, { tokenSymbols } from "Constants/modalType";
import { BigNumber, ethers } from "ethers";
import { ContractAddr, TokenList } from "../Constants/Constants";
import { getProvider, mainnet } from "@wagmi/core";
import UserContext from "../UserContext";
import { useTranslation } from "react-i18next";
import axios from "axios";
import TransitionWrapper from "./TransitionWrapper";
import TransactionSuccesfullPopup from "./TransactionSuccesfullPopup";
import LoadingButton from "./LoadingButton";
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useSigner,
  useWaitForTransaction,
} from "wagmi";
import { BEP20ABI, BigNFTABI } from "Constants/ABI";

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
  // allBalances,
  USDTBalance,
  ETHBalance,
  salePrice,
  nextPrice,
  inSaleUSDvalue,
  hardcapsizeUSD,
}) {
  const { t } = useTranslation("common");

  const [lastSymbol, setLastSymbol] = useState();
  const { connectWallet, contracts, account } = useContext(UserContext);
  const { address } = useAccount();
  const [balances, setBalances] = useState({ ETH: null, USDT: null });
  const [bb, setBB] = useState(0);
  const nftAmountElement = useRef();
  const [somestate, setSomeState] = useState(false);
  const [selectedToken, setSelectedToken] = useState("ETH");
  const maxa = useRef();
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [thirdInputValue, setThirdInputValue] = useState(0);
  const [token, setToken] = useState();
  const [showApprove, setShowApprove] = useState(false);
  // const [deelance, setDeelance] = useState(0);
  const [p, setP] = useState();
  const [salePriceInEth, setSalePriceInEth] = useState(null);
  const usdtDecimals = 10 ** 6;

  const { data: deelance } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    functionName: "userDeposits",
    args: [address],
    watch: true,
  });

  // const getDeelance = async () => {
  //   console.log("Account wallet", account);
  //   const sa = await contracts.Main.userDeposits(account);
  //   const pric = sa / 1000000000000000000;
  //   console.log("Account balance deelance", pric);
  //   setDeelance(pric);
  // };

  // const getAllowan = async () => {
  //   const allowance = parseInt(
  //     await contracts["USDT"].allowance(account, contracts.Main.address),
  //     10
  //   );
  //   setAll(allowance);
  // };

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

  // const getAllBalances = async () => {
  //   const balances = { ETH: await getETHBalance() };
  //   balances["USDT"] = await getTokenBalances("USDT");

  //   setBalances(balances);
  // };

  // const getDeelance = async () => {
  //   const allowance = parseInt(
  //     await contracts["USDT"].allowance(account, contracts.Main.address),
  //     10
  //   );
  //   setAll(allowance);
  //   console.log("Account wallet", account);
  //   const sa = await contracts.Main.userDeposits(account);
  //   const pric = sa / 1000000000000000000;
  //   console.log("Account balance deelance", pric);
  //   setDeelance(pric);
  // };

  const { data: getETHLatestPrice } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    watch: true,
    functionName: "getETHLatestPrice",
  });

  // useEffect(() => {
  //   (async function getSalePrice() {
  //     console.log("running....getSalePrice");

  //     const pri = await contracts.Main.salePrice();
  //     const prezzo_ETH = await contracts.Main.getETHLatestPrice();

  //     setSalePriceInEth(prezzo_ETH);
  //     // setSalePrice(pri);
  //   })();
  // }, [purchasingModalType]);

  //
  //
  const { data: getETHAmount, error } = useContractRead({
    address: ContractAddr.Main,
    abi: BigNFTABI,
    functionName: "getETHAmount",
    args: [
      ethers.utils
        .parseUnits((nftAmountElement?.current?.value | 0)?.toString(), "wei")
        ?.toString(),
    ],
    // watch: true,
  });

  const { data: getUSDTallowance, errorAllowance } = useContractRead({
    address: ContractAddr.USDT,
    abi: BEP20ABI,
    functionName: "allowance",
    args: [address, ContractAddr.Main],
    watch: true,
  });

  // const { config: depositConfig } = usePrepareContractWrite({
  //   address: ContractAddr.Main,

  //   abi: BigNFTABI,
  //   // signer: signData,
  //   functionName: "buyWithETH",
  //   chainId: mainnet.id,
  //   overrides: {
  //     gasLimit: 210000,
  //   },
  //   // args: [ethers.utils.parseEther("1"), address],

  //   // contractInterface: ImpactVaultInterface.abi,
  //   // functionName: "deposit",
  //   // signerOrProvider: signer,
  // });

  const {
    data: buyWithETHData,
    write: buyWithETH,
    error: buyWithETH_ERROR,
    isLoading: isBuyWithETHLoading,
  } = useContractWrite({
    // ...depositConfig,
    address: ContractAddr.Main,

    abi: BigNFTABI,
    // signer: signData,
    functionName: "buyWithETH",
    chainId: mainnet.id,
    onSuccess: async (data, variable) => {
      const errorCode = 0; // Define the errorCode variable here (change its value if needed)

      window.dataLayer.push({
        event: "workflowStep",
        workflowName: "swap",
        workflowStepNumber: 2,
        workflowStepName: "confirmTransaction",
        workflowCompleteFlag: 0,
        workflowErrorCode: errorCode,
        walletAddress: variable.address,
      });

      // const txDetails = await data.wait(1);

      const currentUrl = window.location.href;
      const clickId = getClickIdFromUrl(currentUrl);
      console.log("clickId");
      console.log(clickId);

      const ev = deelance === 0 ? "conversion" : "revenue";

      await sendPayload(
        address, // walletAddress
        token, // purchaseType
        variable.args[0], // secondInputValue?.toString(),
        ethers.utils.formatEther(variable.overrides.value), // how, // purchaseTypeAmount
        thirdInputValue, // purchaseUsdAmount
        "826", // iid - replace with the appropriate value
        ev, // event
        clickId // clickId - replace with the appropriate value
      );

      console.log("ethers.utils.formatEther(variable.overrides.value)");
      console.log(ethers.utils.formatEther(variable.overrides.value));

      // alert("done");
      // console.log("txDetails");
      // console.log(txDetails);
      // console.log("variable");
      // console.log(variable);

      setTransactionSuccessfull({
        transactionHash: data.hash,
        amount: variable.args[0],
        txResult: "trasnaction detail",
      });
      setPurchasingModalType(null);
    },
    onError: (err) => {
      // alert("buyWithUSD ERROR");
      // alert(err.message);
      alert(`You'r transaction is failed, reason: ${err.message}`);
    },
    // overrides: {
    //   gasLimit: 210000,
    // },
  });

  const {
    data: buyWithUSDData,
    write: buyWithUSD,
    error: buyWithUSD_ERROR,
    isLoading: isBuyWithUSDLoading,
  } = useContractWrite({
    // ...depositConfig,
    address: ContractAddr.Main,

    abi: BigNFTABI,
    // signer: signData,
    functionName: "buyWithUSD",
    chainId: mainnet.id,
    onSuccess: async (data, variable) => {
      // const txDetails = await data.wait(1);

      const currentUrl = window.location.href;
      const clickId = getClickIdFromUrl(currentUrl);
      console.log("clickId");
      console.log(clickId);

      const ev = deelance === 0 ? "conversion" : "revenue";

      await sendPayload(
        address, // walletAddress
        token, // purchaseType
        variable.args[0], // secondInputValue?.toString(),
        thirdInputValue, // how, // purchaseTypeAmount
        thirdInputValue, // purchaseUsdAmount
        "826", // iid - replace with the appropriate value
        ev, // event
        clickId // clickId - replace with the appropriate value
      );

      /*  console.log("ethers.utils.formatEther(variable.overrides.value)");
      console.log(ethers.utils.formatEther(variable.overrides.value)); */

      // console.log("txDetails");
      // console.log(txDetails);
      // console.log("variable");
      // console.log(variable);

      const errorCode = 0; // Define the errorCode variable here (change its value if needed)
      window.dataLayer.push({
        event: "workflowStep",
        workflowName: "swap",
        workflowStepNumber: 2,
        workflowStepName: "confirmTransaction",
        workflowCompleteFlag: 0,
        workflowErrorCode: errorCode,
        walletAddress: address,
      });

      setTransactionSuccessfull({
        transactionHash: data.hash,
        amount: variable.args[0],
        txResult: "txDetails",
      });

      setPurchasingModalType(null);
    },

    onError: (err) => {
      alert(`You'r transaction is failed, reason: ${err.message}`);
    },
    // overrides: {
    //   gasLimit: 210000,
    // },
  });

  const {
    data: approveUSDTdata,
    write: approveUSDT,
    error: approveUSDT_error,
    isLoading: approve_USDTloading,
  } = useContractWrite({
    // ...depositConfig,
    address: ContractAddr.USDT,

    abi: BEP20ABI,
    // signer: signData,
    functionName: "approve",
    chainId: mainnet.id,
    onSuccess: (data, variabile) => {
      alert("Ok, you can now buy your $DLANCE tokens!");
    },
    onError: (err) => {
      // alert("approveUSDT ERROR");
      // alert(err.message);
      alert(`You'r transaction is failed, reason: ${err.message}`);
    },
    // overrides: {
    //   gasLimit: 210000,
    // },
  });

  // const { isLoading: isBuyLoadingUSDT, isSuccess: isBuyGotSuccessUSDT } =
  //   useWaitForTransaction({
  //     hash: buyWithUSDData?.hash,
  //   });

  // const { isLoading: isBuyLoadingApp, isSuccess: isBuyGotSuccessApp } =
  //   useWaitForTransaction({
  //     hash: approveUSDTdata?.hash,
  //   });

  // const { isLoading: isBuyLoading, isSuccess: isBuyGotSuccess } =
  //   useWaitForTransaction({
  //     hash: buyWithETHData?.hash,
  //   });

  const handleFirstInputChange = (event) => {
    if (token === "USDT") {
      const inputValue = event.target.value;
      const prezzo = ethers.utils.formatEther(salePrice);
      const priETH = parseInt(inputValue / prezzo, 10);
      console.log(priETH);
      // setSecondInputValue(priETH);
      nftAmountElement.current.value = priETH;

      setP(priETH);
      setThirdInputValue(inputValue);
    } else {
      const inputValue = event.target.value;
      const prezzo = ethers.utils.formatEther(salePrice);
      const prezzo_ETH_formattato = ethers.utils.formatEther(getETHLatestPrice);
      const mio_valore = inputValue * prezzo_ETH_formattato;
      const finale = parseInt(mio_valore / prezzo, 10);
      console.log(finale);
      // setSecondInputValue(finale);
      nftAmountElement.current.value = finale;
      setP(finale);
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
    console.log("PAYLOAD ACQUISTO", payload);
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
      maxa.current.value = +ETHBalance?.formatted;
    } else {
      maxa.current.value = +USDTBalance?.toString() / usdtDecimals;
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

  useEffect(() => {
    // getAllowan();
    getSomeState();
  }, []);

  useEffect(() => {
    // getDeelance();

    // getDeelance();

    if (purchasingModalType === modalType.eth) {
      setToken("ETH");
      // setBB(balances[token]);
      setLastSymbol(tokenSymbols.eth);
    } else if (purchasingModalType === modalType.usdt) {
      setToken("USDT");
      // setBB(balances[token]);
      setLastSymbol(tokenSymbols.usdt);
    } else if (purchasingModalType === null) {
      setLastSymbol((val) => val);
    }
  }, [lastSymbol, purchasingModalType]);

  // useEffect(() => {
  //   setBB(allBalances[token]);
  // }, [balances, purchasingModalType, token, allBalances]);

  // useEffect(() => {
  //   setBB(balances[token]);
  // });

  const isPurchaseLoading =
    isBuyWithETHLoading | isBuyWithUSDLoading | approve_USDTloading;

  return (
    <>
      <TransitionWrapper
        className="presale-purshasing-popup"
        open={Boolean(purchasingModalType)}
        setOpen={isPurchaseLoading ? null : setPurchasingModalType}
      >
        <div>
          <header>
            <p className="fs-20px white weight-700 mb-0">EXCHANGE</p>
            <button
              className="white"
              onClick={() => {
                if (isPurchaseLoading) return;

                chiudi();
              }}
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
                {lastSymbol} {t("Balance")}:{" "}
                {/* {(+ethers.utils.formatEther(bb ? bb : "0")).toFixed(4)} */}
                {lastSymbol === tokenSymbols.usdt
                  ? (+USDTBalance?.toString() / usdtDecimals)?.toString()
                  : (+ETHBalance?.formatted).toFixed(4)}
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
                  onChange={handleFirstInputChange}
                  OnMaxClick={OnMaxClick}
                  maxa={maxa}
                  handleFirstInputChange={handleFirstInputChange}
                  disabled={isPurchaseLoading}
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
                    // value={secondInputValue}
                    ref={nftAmountElement}
                    // required
                    disabled={isPurchaseLoading}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

            <LoadingButton
              // onClick={buyNFT}
              loading={isPurchaseLoading}
              disabled={isPurchaseLoading}
              style={{ width: "100%" }}
              className="text-center justify-content-center"
              onClick={() => {
                // alert(ethers.utils.formatEther(getETHAmount));
                // alert(ethers.utils.parseEther(getETHAmount));
                if (token === "ETH") {
                  buyWithETH({
                    recklesslySetUnpreparedArgs: [
                      nftAmountElement.current.value,
                    ],
                    recklesslySetUnpreparedOverrides: {
                      value: getETHAmount?.toString(),
                      gasLimit: 131000,
                      // value: ethers.utils.parseEther("0.02"),
                    },
                  });

                  //We need to add here the popup @Abdullah
                  /* setTransactionSuccessfull({
                      transactionHash: tx_result.transactionHash,
                      amount: nftAmount?.toString(),
                      txResult: "transaction result",
                    }); */
                } else {
                  //USDT
                  //approve function and allowance
                  console.log("ALLOWANCE:", getUSDTallowance?.toString());
                  console.log(
                    ethers.utils.parseEther(getUSDTallowance?.toString())
                  );

                  if (+getUSDTallowance?.toString() < 1) {
                    approveUSDT({
                      recklesslySetUnpreparedArgs: [
                        ContractAddr.Main,
                        "100000000000000000000000000000000000",
                      ],
                      recklesslySetUnpreparedOverrides: {
                        gasLimit: 131000,
                        // value: ethers.utils.parseEther("0.02"),
                      },
                    });

                    return;
                  } else {
                    buyWithUSD({
                      recklesslySetUnpreparedArgs: [
                        nftAmountElement.current.value,
                        0,
                      ],
                      recklesslySetUnpreparedOverrides: {
                        gasLimit: 131000,
                        // value: ethers.utils.parseEther("0.02"),
                      },
                    });
                  }
                }
              }}
            >
              {token === "USDT" && +getUSDTallowance?.toString() < 1
                ? t("Approve")
                : t("Convert")}
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
