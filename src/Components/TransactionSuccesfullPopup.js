import React, { useState, useContext, useEffect, useRef } from "react";
import TransitionWrapper from "./TransitionWrapper";
import styles from "CSS/TransactionSuccesfullPopup.module.css";
import BaseButton from "./BaseButton";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

function TransactionSuccesfullPopup({ open, setOpen, data }) {
  const { t } = useTranslation("common");
  const [amount, setAmount] = useState();
  const [transaction, setTrans] = useState();
  const [txr, setTrx] = useState();

  useEffect(() => {
    if (!data) {
      return; // non eseguire l'effetto se data è null o undefined
    }

    setTrx(data.trx);
    setAmount(data.amount);
    setTrans(data.transaction);
    console.log("DATA", data);
  }, [data]);

  const handleViewTransaction = () => {
    if (txr) {
      window.open(`https://etherscan.io/tx/${txr}`, "_blank");
    }
    setOpen(false);
  };

  return (
    <TransitionWrapper open={open} className={styles.wrapper}>
      <div>
        <button className={styles.closeBTN} onClick={() => setOpen(false)}>
          <IoMdClose />
        </button>

        <img
          src="images/tick-img.svg"
          className={`${styles.tickImg} mb-4`}
          alt=""
        />

        <h1 className="text-center white weight-700 fs-22px mb-3">
          {t("Your Purchase Was Succesfull")}
        </h1>

        <p className="text-center white mb-4">
          {amount}{" "}
          {t("tokens will be available for you to claim once the presale ends")}
        </p>

        <BaseButton style={{ width: "100%" }} onClick={handleViewTransaction}>
          {t("View Transaction")}
        </BaseButton>
      </div>
    </TransitionWrapper>
  );
}

export default TransactionSuccesfullPopup;
