import NFT from "Components/NFT/NFT";
import NFTTrending from "Components/NFT Trending/NFTTrending";
import NFTPopCat from "Components/NFT Popular cat/NFTPopCat";
import React from "react";
import NavDark from "Components/NavDark/NavDark";
import FootDark from "Components/FootDark/FootDark";

function NftMarket() {
  return (
    <>
      
        
        <div className="dark">
        <NavDark />
        <NFT />
        <NFTPopCat />
        <NFTTrending />
        </div>
        <FootDark />
      
    </>
  );
}

export default NftMarket;
