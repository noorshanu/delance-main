import AcademyPage from 'Components/AcademyPage'
import FootDark from 'Components/FootDark/FootDark'

import NavDark from 'Components/NavDark/NavDark'
import React from 'react'

function Academy() {
  return (
    <div className='dark'>
     <NavDark/>
        <AcademyPage/>
        <FootDark/>
    </div>
  )
}

export default Academy