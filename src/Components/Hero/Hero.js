import React from 'react'
import './Hero.css'
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaLinkedin,
  FaDiscord,
  FaInstagram

} from "react-icons/fa";

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
          <p className='hero-sp-p'>Conect With The Community</p>
          <div className='social-hero d-flex'>
          <a href="https://twitter.com/deelance_com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087266006183"
                    target="_blank" rel="noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a href="https://medium.com/@deeLancer" target="_blank" rel="noreferrer">
                    <FaMedium />
                  </a>
                  <a href="https://t.me/deelancer" target="_blank" rel="noreferrer">
                    <FaTelegramPlane />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://discord.gg/vhH3Sbt9NQ" target="_blank" rel="noreferrer">
                    <FaDiscord />
                  </a>
                  <a href="https://www.instagram.com/deelanceofficial/" target="_blank" rel="noreferrer">
                    <FaInstagram/>
                  </a>
            
          </div>
          <div className='hero-btn'>
            <a href="/" className='hero-btn-1'>Sign up</a>
            <a href="/" className='hero-btn-2'>Explore</a>
          </div>
        </div>
        <div className='col-md-6 text-end align-items-center'>
          <img className='hero-img' src='https://ik.imagekit.io/cforcrypto/Dework/Asset_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269508514' alt=""/>
          
        </div>
        </div>
   
        
      </div>
      <div className='side-2'>
      &nbsp; </div>
    </section>
    </>
  )
}

export default Hero