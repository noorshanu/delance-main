import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import BaseButton from "./BaseButton";

function SignUpButtonWithModal() {
  const [isModal, setIsModal] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    if (isModal) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [isModal]);

  return (
    <>
      <BaseButton onClick={() => setIsModal(true)}>
        {t("Sign Up")} <AiOutlineArrowRight />
      </BaseButton>

      {isModal && (
        <div className="pop-up-sign">
          <div>
            {/* <iframe
                width="540"
                height="305"
                src="https://a83cf220.sibforms.com/serve/MUIEAHsYtyXnp-P1ZZgWLkU-hoJ-yYDWNUUCZjbpduGIBe8_MFUlSt3NBcsQbI6b-IQoxpMwd-YYx4-ca11lD_qaZpUJbFY-qt1OiMM5-kFfEozmU7I2XjMkdIGao-Agt45gbigkvImql6-Bzlj6I1pxfdmXeE-M-EdmMQwOY2j-kRk6gacfT_zIufgD4MLVR-gu009GI8G2rcyw"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: 100000,
                  height: "100vh",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,.8)",
                }}
              ></iframe> */}

            <iframe
              width="540"
              height="305"
              src="https://a83cf220.sibforms.com/serve/MUIEAB2WkT48iDnVlZ6SBsUCpmeL3B6fJ1X1WoLfn32g27okv5__sFz-lelqIrBcgT86gLtBnITSNmnzv7Gs7qB9UNIkcigaK409sQBPPsiAPACAxzJmLYU6ntW9EgcGb8Vks9c1QR7JC_sQZ0Jr7OlroGmvblgXkMn4SK1cbjWhNQzSdBNHLR_IIR2sbk4unyIaq7B6yXyOUTJH"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 100000,
                height: "100vh",
                width: "100%",
                backgroundColor: "rgba(0,0,0,.8)",
              }}
            ></iframe>

            <button
              className="sign-up-close-btn"
              onClick={() => setIsModal(false)}
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpButtonWithModal;
