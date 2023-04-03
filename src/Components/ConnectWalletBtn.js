import { useWeb3Modal } from "@web3modal/react";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import styles from "CSS/ConnectWalletBtn.module.css";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

function ConnectWalletBtn({ onClick, setShowMediaIcons, normal = false }) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (address) {
      scroller.scrollTo("presale-atm", { offset: -100 });
    }
  }, [address]);

  return (
    <button
      className={`${styles.btn} ${normal ? styles.normal : ""}`}
      onClick={() => {
        open();

        if (onClick) {
          onClick();
        }
        if (setShowMediaIcons) {
          setShowMediaIcons(false);
        }
      }}
    >
      {!address ? t("Connect") : ""}{" "}
      {address && (
        <>
          {address.slice(0, 4)}...
          {address.slice(address.length - 4, address.length)}{" "}
        </>
      )}
    </button>
  );
}

export default ConnectWalletBtn;
