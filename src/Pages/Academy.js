import AcademyPage from 'Components/AcademyPage'
import Footer from 'Components/Footer/Footer'
import Navbar from 'Components/Navbar/Navbar'
import React from 'react'

function Academy() {
  return (
    <div className='dark'>
        <Navbar/>
        <AcademyPage/>
        <Footer/>
    </div>
  )
}

export default Academy