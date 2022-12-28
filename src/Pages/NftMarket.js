import NFT from "Components/NFT/NFT";
import NFTTrending from "Components/NFT Trending/NFTTrending";
import NFTPopCat from "Components/NFT Popular cat/NFTPopCat";
import React from "react";
import FootDark from "Components/FootDark/FootDark";
import Navbar from "Components/Navbar/Navbar";

function NftMarket() {
  return (
    <>
      
        
       
       <Navbar/>
        <NFT />
        <NFTPopCat />
        <NFTTrending />
      
        <FootDark />
      
    </>
  );
}

export default NftMarket;
