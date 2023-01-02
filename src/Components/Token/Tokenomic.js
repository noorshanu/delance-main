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
                <p>Team - 10% <span className='orange'><BiCircle/></span> </p>
                <p>Team - 10% <span className='light-blue'><BiCircle/></span></p>
                <p>Team - 10% <span className='deep-blue'><BiCircle/></span></p>
                <p>Team - 10% <span className='green'><BiCircle/></span></p>

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
                <p><span><BiCircle/></span>Team - 10% </p>
                <p> <span><BiCircle/></span> Team - 10%</p>
                <p><span><BiCircle/></span> Team - 10%</p>
                <p><span><BiCircle/></span> Team - 10%</p>

              </div>
              
            </div>
            
          </div>
      
        </div>
        
        </section>
  )
}

export default Tokenomic