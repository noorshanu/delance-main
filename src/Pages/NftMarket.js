
import NFT from 'Components/NFT/NFT'
// import NFTPartners from 'Components/NFT Partners/NFTPartners'
// import NFTTopSellers from 'Components/NFT Top Sellers/NFTTopSellers'
import NFTTrending from 'Components/NFT Trending/NFTTrending'
import NFTPopCat from 'Components/NFT Popular cat/NFTPopCat'
// import NFTNews from 'Components/NFT News/NFTNews'
import React from 'react'
import NavDark from 'Components/NavDark/NavDark'
import FootDark from 'Components/FootDark/FootDark'


function NftMarket() {
  return (
  <>
  <div className='dark'>
  <NavDark/>
    <NFT/>
    <NFTPopCat/>
    {/* <NFTPartners/>
    <NFTTopSellers/> */}
    <NFTTrending/>
   
    {/* <NFTNews /> */}
 <FootDark/>
 </div>
  </>
  )
}

export default NftMarket