import React, { useEffect, useState } from "react";
import TransitionWrapper from "./TransitionWrapper";
import styles from "CSS/ReferralLinkPopup.module.css";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

function ReferralLinkPopup({ open, referralLink, setOpen }) {
  const [isCopied, setCopied] = useState(true);
  const { t } = useTranslation("common");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(referralLink);
      console.log("Text copied to clipboard");
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
    <TransitionWrapper open={open} className={styles.wrapper}>
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
