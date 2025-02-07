import React from 'react'
import './ExpertTeam.css'
import TeamCard from '../TeamCard/TeamCard'
import TeamData from './TeamData.js'

const ExpertTeam = () => {

  return (
    <div className='expert-team'>
        <h2>Expert Team</h2>
        <div className="teamcardsarea" >
        {TeamData.map((member,index)=>(
            <TeamCard  key={index} data={member}/>
        ))}
        </div>
    </div>
  )
}

export default ExpertTeam
