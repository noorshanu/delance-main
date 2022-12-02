import FootDark from 'Components/FootDark/FootDark'
import NavDark from 'Components/NavDark/NavDark'
import Team from 'Components/Team/Team'
import React from 'react'

function TeamPage() {
  return (
    <>
    <div className='dark'>
        <NavDark/>
        <Team/>
        <FootDark/>
    </div>
    </>
    
  )
}

export default TeamPage