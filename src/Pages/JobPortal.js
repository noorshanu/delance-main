import Footer from 'Components/Footer/Footer'
import Jobs from 'Components/Jobs/Jobs'
import Navbar from 'Components/Navbar/Navbar'
import React from 'react'

function JobPortal() {
  return (
    <div className='dark'>
        <Navbar/>
        <Jobs/>
        <Footer/>
    </div>
  )
}

export default JobPortal