import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "CSS/LanguageSelector.module.css";
import { FaGlobe } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import generateLanguage from "utils/generateLanguage";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const allLanguages = [
  { text: "English", value: "en" },
  { text: "German", value: "de" },
  { text: "Spanish", value: "es" },
  { text: "Chinese", value: "zh" },
  { text: "Arabic", value: "ar" },
  { text: "Russian", value: "ru" },
  { text: "French", value: "fr" },
  { text: "Japanese", value: "ja" },
  { text: "Bulgarian", value: "bg" },
  { text: "Czech", value: "cs" },
  { text: "Dutch", value: "nl" },
  { text: "Hungarian", value: "hu" },
  { text: "Indonesian Malay", value: "ms" },
  { text: "Italian", value: "it" },
  { text: "Korean", value: "ko" },
  { text: "Portuguese", value: "pt" },
  { text: "Romanian", value: "ro" },
  { text: "Slovak", value: "sk" },
  { text: "Thai", value: "th" },
  { text: "Turkish", value: "tr" },
  { text: "Vietnamese", value: "vi" },
  { text: "Polish", value: "pl" },
];

function LanguageSelector() {
  const { i18n } = useTranslation("common");
  const [langCode, setLangCode] = useState("en");
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  function changeLanguage(value) {
    i18n.changeLanguage(value);

    // if (value == "0") return;

    // console.log(value);

    // let loc = "/";
    // window.location.replace(loc + "?lng=" + value);
  }

  useEffect(() => {
    setLangCode(i18n?.language);
  }, [i18n?.language]);

  return (
    <div className={styles.languageDetectorWrapper}>
      <button className={styles.btn}>
        <FaGlobe />
        <span className={styles.languageCode}>{langCode}</span>
        <AiFillCaretDown />
      </button>

      <div className={styles.dropdown}>
        <div className={styles.dropdownMain}>
          {allLanguages.map((item, i) => (
            <button
              type="button"
              key={i}
              onClick={() => {
                navigate(generateLanguage(item.value, location));
                changeLanguage(item.value);
              }}
              className={`${styles.dropdownItem} ${
                langCode == item.value && styles.active
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {/* <select
ref={selectRef}
value={lang}
onChange={handleChange}
className="explore-btn"
>
{allLanguages.map((item, i) => {
  return (
    <option key={i} value={item.value}>
      {item.text}
    </option>
  );
})}
</select> */}
    </div>
  );
}

export default LanguageSelector;
