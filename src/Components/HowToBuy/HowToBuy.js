import React from "react";
import TitleDash from "Components/TitleDash";
import { useTranslation } from "react-i18next";
import styles from "CSS/HowToBuy.module.css";
import FullImageTutorials from "./FullImageTutorials";
import Heading from "./Heading";
import Form from "./Form";

const StepCard = ({ step, title, children }) => {
  return (
    <div>
      <p className="fs-18px uppercase white mb-2">{step}</p>
      {/* <h1 className="fs-22px green-text weight-700 mb-4">{title}</h1> */}
      <TitleDash
        title={title}
        fontSize="fs-22px"
        color="green-text"
        className="mb-3"
        textClassName="mb-0"
      />

      <p className="fs-16px white">{children}</p>
    </div>
  );
};

function HowToBuy() {
  const { t } = useTranslation("common");

  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-5">
          <div className="d-flex justify-content-center">
            <TitleDash
              dashImg="images/dash.svg"
              title={t("How Do You Buy?")}
              className="mb-4 text-center"
              textClassName="mb-0"
            />
          </div>

          <p className="text-center fs-20px white">
            Welcome to DeeLance ‘Crypto For Dummies’ guide. If you’re
            still a dummy, you’d better read on!
          </p>
        </div>

        <br />

        <div className="mb-5">
          <Heading className="mb-5">For Desktop & Laptop Users</Heading>
          <br />

          <div className={styles.stepsGrid}>
            <StepCard step="STEP 1" title="Install MetaMask on your browser">
              You can’t be in crypto without a decentralised wallet that only
              you control. Visit the{" "}
              <a
                href="https://metamask.io/"
                className="green-text underline"
                target="_blank"
                rel="noreferrer"
              >
                ​MetaMask website
              </a>{" "}
              and choose the browser for which you wish to install the wallet.
              The most common options are Chrome and Firefox.
            </StepCard>

            <StepCard step="STEP 2" title="Create your wallet">
              Once installed, click on the ‘Create a Wallet’ button. Your wallet
              is a public key comprising randomly generated numbers and letters.
              This is your identifier on the blockchain.
            </StepCard>

            <StepCard step="STEP 3" title="Set a wallet password">
              MetaMask will ask you to create a password. Make sure your
              password is as secure as possible.
            </StepCard>

            <StepCard step="STEP 4" title="Write down recovery phrase">
              Write down your 12-word recovery phrase on a piece of paper and
              keep it somewhere safe. Don’t store it on your PC! Without this,
              you could lose access to your wallet.
            </StepCard>

            <StepCard step="STEP 5" title="Connect to the Ethereum network">
              By default, MetaMask is set to transact with the Ethereum network.
              Therefore there is no need to change the network within MetaMask
              so that you can engage with the DeeLance token.
            </StepCard>

            <StepCard step="STEP 6" title="Import DeeLance to MetaMask">
              To view your balance, import $Dlance to your MetaMask wallet. Click
              on ‘Import Tokens’ and paste in the contract address:
              <br/>
              <span style={{ wordWrap: "break-word", wordBreak: "break-all" }}>
              0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A
              </span>
            </StepCard>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="mb-5">
          <Heading className="mb-5">For Mobile & Tablet Users</Heading>
          <br />

          <div className={styles.stepsGrid}>
            <StepCard step="STEP 1" title="Download Trust Wallet app">
              Trust Wallet is a mobile wallet app backed by the popular Binance
              exchange. You can get the app via Google Play or the App Store –
              or access the download link via the Binance website.
            </StepCard>

            <StepCard step="STEP 2" title="Create your wallet">
              You will now be asked if you already have a ​Trust Wallet or if
              you wish to create a new one. Click the ‘Create a Wallet’ button
              to create a new wallet.
            </StepCard>

            <StepCard step="STEP 3" title="Backup your passphrase">
              Carefully write down the 12-word backup passphrase you are shown.
              Next, you will need to manually type the 12 words in the correct
              sequence so that Trust Wallet knows you have written the backup
              passphrase down correctly.
            </StepCard>

            <StepCard step="STEP 4" title="Add DeeLance token">
              Now that you have set up Trust Wallet on your mobile device, you
              can add the DeeLance token ($Dlance). You can do this by
              clicking on the button from the top-right of the screen, followed
              by ‘Add Custom Token’.
            </StepCard>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div style={{ maxWidth: "50rem", width: "100%", margin: "0 auto" }}>
          <FullImageTutorials />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div id="new-to-crypto-form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
