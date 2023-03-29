import React from "react";
import TitleDash from "Components/TitleDash";
import { useTranslation } from "react-i18next";
import styles from "CSS/HowToBuy.module.css";
import FullImageTutorials from "./FullImageTutorials";
import Heading from "./Heading";
import Form from "./Form";

const StepCard = ({ step, title, children }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <p className="fs-18px uppercase white mb-2">{t(step)}</p>
      {/* <h1 className="fs-22px green-text weight-700 mb-4">{title}</h1> */}
      <TitleDash
        title={t(title)}
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
              title={t("How To Buy $DLANCE?")}
              className="mb-4 text-center"
              textClassName="mb-0"
            />
          </div>

          <p className="text-center fs-20px white">
            {t(
              "Welcome to DeeLance beginner's guide. Follow the steps below to buy $DLANCE"
            )}
          </p>
        </div>

        <br />

        <div className="mb-5">
          <Heading className="mb-5">{t("For Desktop & Laptop Users")}</Heading>
          <br />

          <div className={styles.stepsGrid}>
            <StepCard step="STEP 1" title="Install MetaMask on your browser">
              {t(
                "To begin your journey in the web3 world, you need to install a decentralized wallet that only you have control over. One of the most widely used wallets is MetaMask. To install MetaMask, visit the official"
              )}{" "}
              <a
                href="https://metamask.io/"
                className="green-text underline"
                target="_blank"
                rel="noreferrer"
              >
                {t("​MetaMask website")}
              </a>{" "}
              {t(
                "and select the browser you would like to use, such as Chrome or Firefox"
              )}
              .
            </StepCard>

            <StepCard step="STEP 2" title="Create your wallet">
              {t(
                "Once installed, click on the 'Create a Wallet' button to create your MetaMask wallet. Your wallet's public is a unique identifier on the blockchain and is generated randomly."
              )}
            </StepCard>

            <StepCard step="STEP 3" title="Set a wallet password">
              {t(
                "MetaMask will prompt you to set a password for your wallet. It is essential to choose a strong password that cannot be easily guessed."
              )}
            </StepCard>

            <StepCard step="STEP 4" title="Write down recovery phrase">
              {t(
                "It is crucial to write down your 12-word recovery phrase on a piece of paper and keep it safe. Please do it on your PC as it may be vulnerable to cyber-attacks. This recovery phrase is necessary, without this you could lose access to your wallet."
              )}
            </StepCard>

            <StepCard step="STEP 5" title="Connect to the Ethereum network">
              {t(
                " By default, MetaMask is set to transact with the Ethereum network, which means there is no need to change the network settings within the wallet to engage with the DeeLance token."
              )}
            </StepCard>

            <StepCard step="STEP 6" title="Import DeeLance to MetaMask">
              {t(
                "Import DeeLance to MetaMask To view your balance, import $DLANCE to your MetaMask wallet. Click on ‘Import Tokens’ and paste in the contract address:"
              )}
              <br />
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
          <Heading className="mb-5">{t("For Mobile & Tablet Users")}</Heading>
          <br />

          <div className={styles.stepsGrid}>
            <StepCard step="STEP 1" title="Download Trust Wallet app">
              {t(
                "To begin, download the Trust Wallet mobile application. Trust Wallet is supported by the popular Binance exchange and can be accessed via the Binance website or the App Store and Google Play."
              )}
            </StepCard>

            <StepCard step="STEP 2" title="Create your wallet">
              {t(
                "Once downloaded, you will be prompted to either create a new Trust Wallet or sign in to an existing one. Click on the ‘Create a Wallet’ button to generate a new wallet."
              )}
            </StepCard>

            <StepCard step="STEP 3" title="Backup your passphrase">
              {t(
                "It is crucial to backup your 12-word passphrase carefully. Trust Wallet will require you to manually enter these 12 words in the correct order to confirm that the backup passphrase is accurately recorded."
              )}
            </StepCard>

            <StepCard step="STEP 4" title="Add DeeLance token">
              {t(
                "With Trust Wallet set up on your mobile device, you can add the DeeLance token ($DLANCE) by selecting the button at the top-right of the screen and choosing ‘Add Custom Token’."
              )}
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
