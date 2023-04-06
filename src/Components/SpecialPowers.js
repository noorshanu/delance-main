import React from "react";
import styles from "CSS/SpecialPowers.module.css";
import SpecialPowerCard from "./SpecialPowerCard";

function SpecialPowers() {
  return (
    <div className="container">
      <p className="text-center green-text fs-20px mb-4">
        With the $DLANCE token, unlock special privileges!
      </p>

      <div className={styles.grid}>
        <SpecialPowerCard
          icon="/images/details/hand.svg"
          title="Hold To Get NFTs"
          points={[
            "For discount on deals",
            "To purchase offices and land in the Metaverse",
            "To unlock premium features",
          ]}
        />
        <SpecialPowerCard
          icon="/images/details/list.svg"
          title="Hold To Secure Your Whitelist spot "
          points={[
            "$DLANCE token holders will automatically qualify for the NFT whitelisting for Rare Premium NFTs",
          ]}
        />
        <SpecialPowerCard
          icon="/images/details/done.svg"
          title="Get To Deal In NFT Marketplace"
          points={[
            "Mint, buy and sell NFTs with $DLANCE",
            "Pay for transaction fees in the NFT marketplace",
          ]}
        />
        <SpecialPowerCard
          icon="/images/details/world.svg"
          title="Get To Unlock Metaverse VIP Experience"
          points={[
            "Purchase premium virtual land and office space in the Metaverse.",
            "Lease office space in the Metaverse.",
            "Advertising / Display ads in Metaverse. ",
          ]}
        />
      </div>
    </div>
  );
}

export default SpecialPowers;
