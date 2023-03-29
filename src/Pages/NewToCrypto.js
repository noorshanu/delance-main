import Form from "Components/HowToBuy/Form";
import TitleDash from "Components/TitleDash";
import PageLayout from "layouts/PageLayout";
import React from "react";
import { useTranslation } from "react-i18next";

function NewToCrypto() {
  const { t } = useTranslation("common");

  return (
    <PageLayout>
      <div className="container">
        <div
          className="py-3 py-md-5"
          style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}
        >
          <TitleDash title={t("New To Crypto?")} className="text-center mb-5" />
          <Form />
        </div>
      </div>
    </PageLayout>
  );
}

export default NewToCrypto;
