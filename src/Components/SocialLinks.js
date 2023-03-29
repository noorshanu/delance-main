import React from "react";
import styles from "CSS/SocialLinks.module.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function SocialLinks({ style, className, fontSize = "100%" }) {
  return (
    <div
      className={`${styles.socialLinks} ${className}`}
      style={{ fontSize, ...style }}
    >
      <a
        href="https://twitter.com/deelance_com"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100087266006183"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a href="https://medium.com/@deeLance" target="_blank" rel="noreferrer">
        <FaMedium />
      </a>
      <a href="https://t.me/deelance_com" target="_blank" rel="noreferrer">
        <FaTelegramPlane />
      </a>
      <a
        href="https://www.linkedin.com/company/deelance"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://discord.gg/vhH3Sbt9NQ" target="_blank" rel="noreferrer">
        <FaDiscord />
      </a>
      <a
        href="https://www.instagram.com/deelanceofficial/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCM7Nv8JQECFr5lF_hd8KgTA"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
    </div>
  );
}

export default SocialLinks;
