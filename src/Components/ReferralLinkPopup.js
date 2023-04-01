import React, { useEffect, useState } from "react";
import TransitionWrapper from "./TransitionWrapper";
import styles from "CSS/ReferralLinkPopup.module.css";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useAccount } from "wagmi";
import axios from "axios";

function ReferralLinkPopup({ open, referralLink, setOpen }) {
  const [isCopied, setCopied] = useState(true);
  const { t } = useTranslation("common");
  const { address } = useAccount();

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

  const sendingConnection = async (walletAddress, iid) => {
    const event = "lead_success";
    const currentUrl = window.location.href;
    const clickId = getClickIdFromUrl(currentUrl);
    const payload = {
      walletAddress,
      iid,
      event,
      clickId,
    };

    console.log("SENDING CONNECTION");
    console.log("PAYLOAD PER SENDING", payload);
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
      console.log("FUNZIONA");
      console.log("API response SENDING:", data);
    } catch (error) {
      console.error("Error sending payload:", error);
    }
  };

  const handleClickReferralLink = () => {
    const iid = "826"; // Replace with the desired iid
    console.log("ACCOUNT IN HANDLE", address);
    // generateReferralLink(address, iid);
    sendingConnection(address, iid);
  };

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(referralLink);
      console.log("Text copied to clipboard");
      handleClickReferralLink();
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopied(false);
    }
  }

  useEffect(() => {
    let timeOut;
    if (isCopied == true) {
      new Promise((resolve) => {
        timeOut = setTimeout(() => {
          resolve();
        }, 2000);
      }).then(() => {
        clearTimeout(timeOut);
        setCopied(false);
      });
    }
  }, [isCopied]);

  return (
    <TransitionWrapper open={open} className={styles.wrapper} setOpen={setOpen}>
      <div>
        <header>
          <h1 className="text-center white fs-20px weight-700 mb-0 uppercase">
            {t("Referral Link")}
          </h1>

          <button className={styles.closeBTN} onClick={() => setOpen(false)}>
            <IoMdClose />
          </button>
        </header>

        <main>
          <p className="fs-16px text-center white mb-4">
            {t(
              "Copy your referral link below and send it to your friends. For every purchase made using this link, you’ll receive $DLANCE tokens airdrop worth $200K."
            )}
          </p>

          <div className={styles.link}>
            <div className={`${styles.linkLeft}`}>
              <p className="cut-text white fs-16px weight-800 mb-0">
                {referralLink}
              </p>
            </div>
            <button className={styles.copyBtn} onClick={handleCopy}>
              {isCopied ? <FaCopy /> : <FaRegCopy />}
            </button>
          </div>
        </main>
      </div>
    </TransitionWrapper>
  );
}

export default ReferralLinkPopup;
