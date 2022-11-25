import React from 'react'
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaYoutube,

} from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className='footer'>
      <div className='container border-foot-top'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-3 col-6' >
            <div className='footer-logo'>
              <img src="https://ik.imagekit.io/cforcrypto/Dework/WhatsApp_Image_2022-11-05_at_8.21_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669013135558" alt="foot-logo"/>
            </div>
            <p className='sc-1'>Conect With The Community</p>
            <div className="foot-social">
                  <a href="https://twitter.com/AFUN_Verse" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087203265007"
                    target="_blank" rel="noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaMedium />
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaTelegramPlane />
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
            
          </div>

          <div className='col-md-3 col-6' >
          <a href="/" className='hero-btn-1'>Sign up</a>
            <a href="/" className='hero-btn-2'>Explore</a>
            
            </div>

            <div className='col-md-3 col-6' >
            <div className="foot-link">
                <a href="/">
                  <p>About</p>
                </a>
                <a href="/">
                  <p>Careers</p>
                </a>

                <a href="/">
                  <p>Community</p>
                </a>

                <a href="/" target="_terms">
                  <p>Terms</p>
                </a>
              </div>
            
            </div>

            <div className='col-md-3 col-6' >
            <div className="foot-link">
                <a href="/" target="_privacy">
                  <p>Privacy</p>
                </a>
                <a href="/" target="_risk">
                  <p>Risk Warning</p>
                </a>
                <a href="/">
                  <p>Announcements</p>
                </a>

                <a href="/" target="_privacy">
                  <p>Cookie Preferences</p>
                </a>
              </div>
            </div>
          
        </div>
      
      </div>
      <p className='foot-bottom-text'>2022© DeWork Inc. | All Rights Reserved </p>
    </footer>
    
    </>
  )
}

export default Footer