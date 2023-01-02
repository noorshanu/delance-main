import React from 'react'
import './Tokenomic.css'
import {BiCircle} from 'react-icons/bi'

function Tokenomic() {
  return (
    <section className='token'>
        <div className='container justify-content-center text-center'>
          <div className='token-head text-center'>
            <h1>Tokenomics</h1>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_427325103.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800599" alt=""/>
          </div>
          <div className='row align-items-center'>

            <div className='col-md-4'>
              <div className='to-1 text-end'>
                <p>Team - 10% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652602964" alt=""/> </p>
                <p>Reserved/Ecosystem - 15% <img src="https://ik.imagekit.io/cforcrypto/Dework/token/Ellipse_22-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672652603018" alt=""/></p>
                <p>Cex - 16% <span className='deep-blue'><BiCircle/></span></p>
                <p>Advisor/Partnership - 6% <span className='green'><BiCircle/></span></p>

              </div>
              
            </div>

            <div className='col-md-4 text-center'>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/Group_1261152779.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672393264251" alt="" className='token-img'/>
            <div style={{margin:'auto'}} className='main-sub-btn'>
            <a href="#team" className="demo-btn">BUY NOW</a>
            </div>
              </div>

              <div className='col-md-4'>
              <div className='to-2 text-start'>
                <p><span><BiCircle/></span> Rewards / Airdrop - 2%  </p>
                <p> <span><BiCircle/></span> Liquidity - 15%</p>
                <p><span><BiCircle/></span> Presale - 33%</p>
                <p><span><BiCircle/></span> Private - 3%</p>

              </div>
              
            </div>
            
          </div>
      
        </div>
        
        </section>
  )
}

export default Tokenomic