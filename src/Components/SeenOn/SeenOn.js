import React from "react";
import Mint from "../../assets/seen/mint.png";
import Bct from "../../assets/seen/bct.png";
import Coin from "../../assets/seen/coin.png";
import Crypto from "../../assets/seen/crypto.png";
import Fina from "../../assets/seen/fina.png";
import Krypto from "../../assets/seen/krypto.png";
import Tet from "../../assets/seen/tet.png";
import "./seen.css";
import Marquee from "react-fast-marquee";

const images = [
  {
    img: "images/beInCrypto.png",
    styles: { height: "2.6rem" },
  },
  { img: "images/yahoo-finance.png", styles: { height: "2.6rem" } },
  { img: "images/insider.png", styles: { height: "2.2rem" } },
  { img: "images/cryptonews.svg", styles: { height: "2.6rem" } },
  { img: "images/finanzen-net.svg", styles: { height: "1.9rem" } },
  { img: "images/cointelegraph.svg", styles: { height: "2.6rem" } },
];

function SeenOn() {
  return (
    <section className="seenOn">
      <div className="container">
        <Marquee className="seen-grid" gradientColor={[17, 24, 39]} speed={50}>
          {images.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt="img"
              style={{
                filter: "brightness(0) invert(1)",
                ...item?.styles,
              }}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default SeenOn;
