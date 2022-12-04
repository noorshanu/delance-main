import FootDark from 'Components/FootDark/FootDark'
import Jobs from 'Components/Jobs/Jobs'
import NavDark from 'Components/NavDark/NavDark'
import React from 'react'

function JobPortal() {
  return (
    <>
    <div className='dark'>
        <NavDark/>
        <Jobs/>
       
    </div>
    <FootDark/>
    </>
  )
}

export default JobPortal