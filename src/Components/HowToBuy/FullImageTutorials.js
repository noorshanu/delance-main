import React from "react";
import Heading from "./Heading";
import styles from "CSS/HowToBuy.module.css";
import Step from "../../assets/how/step.jpg";
import Step1 from "../../assets/how/step1.png";
import Step2 from "../../assets/how/step2.png";
import Step3 from "../../assets/how/step3.png";
import Step4 from "../../assets/how/step4.png";

import Thanku from "../../assets/how/thanku.jpg";

import StepUsdt1 from "../../assets/how/usdt/step1.png";
import Stepusdt2 from "../../assets/how/usdt/step2.png";

// card
import StepCard1 from "../../assets/how/card/step1.png";
import StepCard2 from "../../assets/how/card/step2.png";
import StepCard3 from "../../assets/how/card/step3.png";
import StepCard4 from "../../assets/how/card/step4.png";
import StepCard5 from "../../assets/how/card/step5.png";
import StepCard6 from "../../assets/how/card/step6.png";
import StepCard7 from "../../assets/how/card/step7.png";
import StepCard8 from "../../assets/how/card/step8.png";
import StepCard9 from "../../assets/how/card/step9.png";
import StepCard10 from "../../assets/how/card/step10.png";
import StepCard11 from "../../assets/how/card/step11.png";
import StepCard12 from "../../assets/how/card/step12.png";

function FullImageTutorials() {
  return (
    <div>
      <div className={`${styles.HowToBuyStack} mb-5`}>
        <div>
          <Heading className="mb-5">HOW TO BUY $DLANCE TOKENS</Heading>

          <img src={Step} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
            1. Click the Connect button and you'll be prompted to connect your
            wallet.
          </p>
        </div>

        <div>
          <img src={Step1} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
            2. You will have the option to connect using MetaMask or another supported wallet via Wallet Connect. For desktop, MetaMask is recommended while Trust Wallet is suggested for mobile devices.
          </p>
        </div>

        <div>
          <img src={Step2} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
            3.You can purchase $DLANCE tokens in three ways; with ETH, USDT or card. Ensure that you select the Ethereum network on your wallet and then click on the BUY button that corresponds to your preferred currency.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className={`${styles.HowToBuyStack} mb-5`}>
        <div>
          <Heading className="mb-5">1. Buying With ETH</Heading>

          <img src={Step3} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
          Buying with ETH: Click on 'Buy $Dlance with ETH' and enter the amount of ETH you wish to exchange for $Dlance tokens. Click on 'Convert'.
          </p>
        </div>

        <div>
          <img src={Step4} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
          You will then need to confirm your purchase. The confirmation window will automatically pop up on MetaMask where you can review the transaction details and gas fee (a fee paid in ETH to network validators for verifying the transaction). Once you have reviewed and agreed to the transaction details, click on 'Confirm'.
          </p>
        </div>
        <div>
          <img src={Thanku} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
          Once the transaction is complete, you will see the SUCCESS screen. You can claim your $DLANCE tokens from the DeeLance website at the end of the presale.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className={`${styles.HowToBuyStack} mb-5`}>
        <div>
          <Heading className="mb-5">2. Buying With USDT</Heading>

          <img
            src={StepUsdt1}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="mb-0 fs-18px white text-center">
          Before proceeding with your transaction, you will need to authorize the use of USDT in your wallet. To continue, please confirm the authorization prompt.
          </p>
        </div>
        <div>
          <img
            src={Stepusdt2}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="mb-0 fs-18px white text-center">
          Next, you will be required to confirm your purchase. The MetaMask interface will automatically display the confirmation window, where you can review the transaction details and gas fee, which is paid in ETH to network validators for verifying the transaction. Once you have reviewed and approved the transaction details, click the ‘Confirm’ button.
          </p>
        </div>
        <div>
          <img src={Thanku} style={{ width: "100%" }} className="mb-5" alt="" />

          <p className="mb-0 fs-18px white text-center">
          After completing the transaction, you will see a SUCCESS screen. You can claim your $DLANCE tokens from the DeeLance site at the end of the presale.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className={`${styles.HowToBuyStack}`}>
        <div>
          <Heading className="mb-5">3. Buy ETH With Card</Heading>

          <p className="fs-18px white text-center mb-5">
          To buy ETH using your card, bank transfer, or other methods, such as Apple Pay, you will be directed to our partner, Transak. Once there, you can complete your purchase directly in the widget.
          </p>

          <img
            src={StepCard1}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="mb-0 fs-18px white text-center">
          Select your preferred currency, enter the amount you wish to pay, and choose your payment method. The widget will display the estimated ETH you will receive, the rate, and the total fees to carry out the transaction. After selecting your payment method and amount, click the 'Buy Now' button.
          </p>
        </div>
        <div>
          <img
            src={StepCard2}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="mb-0 fs-18px white text-center">
          Before completing your purchase, you will need to go through Transak's KYC process to verify your account for purchasing. KYC (Know Your Customer) is a legal requirement for verifying the identity of clients. The process takes only a few minutes. To begin, enter your email address and verify it with the 4-digit code sent to your email. Then, agree to Transak's terms of use and click 'Continue.'
          </p>
        </div>
        <div>
          <img
            src={StepCard3}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center">
          Next, enter your personal details, including your phone number and date of birth, and continue to fill out your home address.
          </p>
        </div>

        <div>
          <hr />
          <br />
          {/* <p className="fs-18px white text-center">
            <strong> Please note</strong>: the minimum purchase amount is 1000
            D2T.
          </p> */}

          <img
            src={StepCard5}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center">
          Once you have added your details, you will be required to prove your identity with a government-issued photo ID, such as a passport or driver's license. Select the issuing country of your identification, then choose your preferred ID method.
          </p>
          {/* <p className="fs-18px white text-center">
            Select your chosen currency, enter the amount you wish to pay, and
            then choose your payment method. Outlined below are the estimated
            ETH you will receive, the rate and the total fees to carry out the
            transaction.
          </p> */}
          {/* <p className="fs-18px white text-center mb-5">
            Once you have chosen your payment method and purchase amount, click
            BUY NOW.
          </p> */}

          <img
            src={StepCard6}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center">
          You can upload your ID proof through your mobile device or desktop webcam. If you are purchasing on a desktop without a webcam, click 'Continue on Mobile' and add your email address. A link will then be sent to you to access the Transak KYC portal and follow the steps on your mobile device.
          </p>

          <img
            src={StepCard7}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center mb-5">
          Take a photo of your ID and a selfie with adequate lighting and clear images.
          </p>

          <img
            src={StepCard8}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center ">
          Continue through to confirm your photos are adequate. If the images are insufficient, you can 'Try Again' and redo the process.
          </p>
          {/* <p className="fs-18px white text-center mb-5">
            First, select the issuing country of your identification, then
            select which ID method you would like to use.
          </p> */}

          <img
            src={StepCard8}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />
          <p className="fs-18px white text-center ">
          Once you have confirmed your photos, your KYC details will be submitted to Transak for verification. The process typically takes between 5-10 minutes. 
          </p>
          {/* <p className="fs-18px white text-center mb-5">
            If you are purchasing on a desktop but do not have access to a
            webcam ‘Continue on mobile’ and add your email address. A link will
            then be sent to you to access the Transak KYC portal and follow the
            steps on your mobile.
          </p> */}

          <img
            src={StepCard9}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center mb-5">
          Transak will notify you once you have been verified, and you can then proceed with your purchase by clicking 'Order Now' to continue to your billing address
          </p>

          <img
            src={StepCard10}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center mb-5">
            Once you input your billing address information, you can ‘Continue’
            to confirm your purchase.
          </p>

          <img
            src={StepCard11}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center mb-5">
            Once you have confirmed your photos, your KYC details will be
            submitted to Transak for verification. The verification process
            usually takes between 5-10 minutes.
          </p>

          <img
            src={StepCard12}
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center">
            For first-time purchases, or if you want to use a new card, click ‘+
            Add new card’.
          </p>
          <p className="fs-18px white text-center mb-5">
            Here you can input the card details you wish to purchase with. You
            will also see your card billing address towards the top of the
            widget. Once the information has been added, ‘Add Card’.
          </p>

          <p className="fs-18px white text-center mb-5">
            You will now need to accept Transaks Terms of Use and authorize
            Checkout.com to debit your account, along with confirming you wish
            to purchase the ETH to the wallet address provided. Click ‘Confirm’
            for your purchase to be processed.
          </p>
          {/* <img
            src="https://www.lovehateinu.com/assets/images/buy-img/desktop-4.svg"
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          />

          <p className="fs-18px white text-center">
            For first-time purchases, or if you want to use a new card, click ‘+
            Add new card’.
          </p>
          <p className="fs-18px white text-center">
            Here you can input the card details you wish to purchase with. You
            will also see your card billing address towards the top of the
            widget. Once the information has been added, ‘Add Card’.
          </p>
          <p className="fs-18px white text-center">
            You will now need to accept Transaks Terms of Use and authorize
            Checkout.com to debit your account, along with confirming you wish
            to purchase the ETH to the wallet address provided.
          </p>
          <p className="fs-18px white text-center mb-5">
            Click ‘Confirm’ for your purchase to be processed.
          </p> */}

          {/* <img
            src="https://www.lovehateinu.com/assets/images/buy-img/desktop-4.svg"
            style={{ width: "100%" }}
            className="mb-5"
            alt=""
          /> */}

          <p className="fs-18px white text-center">
            All done! Once payment has been authorized, it will take a few
            minutes for your order to be processed. Transak will send you a
            confirmation email once your ETH has been delivered to your wallet.
            Here you can also track your order or navigate back to the app.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default FullImageTutorials;
