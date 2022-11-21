import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
    <section className='hero'>
      <div className='side-1'>
      &nbsp; </div>
      <div className='container'>
        <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h1>Creating space for better world to work <span className='green'>together</span></h1>
          <div className='hero-btn'>
            <a href="/" className='hero-btn-1'>Sign up</a>
            <a href="/" className='hero-btn-2'>Explore</a>
          </div>
        </div>
        <div className='col-md-6 text-end align-items-center'>
          <img className='hero-img' src='https://ik.imagekit.io/cforcrypto/Dework/image_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669013136326' alt=""/>
          
        </div>
        </div>
   
        
      </div>
    </section>
    </>
  )
}

export default Hero