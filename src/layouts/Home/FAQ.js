import React from "react";
import Accordion from "Components/Accordion";
import DashImg from "../../assets/dash.svg";
import { useTranslation } from "react-i18next";
import TitleDash from "Components/TitleDash";
import SignUpButtonWithModal from "Components/SignUpButtonWithModal";

function FAQ() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="container">
        <div className="faq-grid">
          <div className="faq-head">
            <TitleDash title={t("FAQs")} />
            <div>
              <h4 className="faq-p mt-3 mb-4 white">
                {t(
                  "Answers to some of the most frequently asked questions about Deelance. Do you have a question that’s not on the list? Let us know!"
                )}
              </h4>

              <SignUpButtonWithModal />
            </div>
          </div>

          <div className="accordion-list">
            <Accordion title={t("faq.question1", "What is Deelance?")}>
              <p className="mb-0">
                {t(
                  "Deelance is a freelancing and recruitment platform based on Web3 technology that is redefining how freelancers connect with potential employers and buyers."
                )}
              </p>
            </Accordion>
            <Accordion title={t("faq.question2", "Why Deelance?")}>
              <div className="pt-2"></div>
              <p>{t("✔️Advance Gig Framework with NFT subscription model")}</p>
              <p>{t("✔️Multiple Crypto payment option")}</p>
              <p>{t("✔️NDA ( Buyer & Seller )")}</p>
              <p>{t("✔️On-chain KYC to avoid bad Actors")}</p>
              <p>{t("✔️Extra benefit with Data ownership ")}</p>
              <p>{t("✔️Smart contract escrow")}</p>
              <p className="mb-0">{t("✔️Smart contract job Placements")}</p>
            </Accordion>

            <Accordion title={t("faq.question3", "How can I buy DLANCE?")}>
              <p>
                {t("$DLANCE can be purchased on")}{" "}
                <a href="deelance.com" target="_blank">
                  {t("deelance.com")}
                </a>{" "}
                {t("using ETH, USDT, or via credit card through our partner.")}
              </p>

              <p className="mb-0">
                {t(
                  "You can purchase ETH using your card, then swap for $DLANCE. Ensure you have enough ETH to buy $DLANCE cover the gas fees"
                )}
              </p>
            </Accordion>
            <Accordion title={t("faq.question4", "What is next for Deelance?")}>
              <p className="mb-0">
                {t(
                  "After the pre-sale, our focus will be on developing and launching the platform, NFT marketplace, Metaverse app, and expanding our reach globally by connecting with more ambassadors."
                )}
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
