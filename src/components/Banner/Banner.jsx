import React from 'react'
import { Button } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
  return (
    <div className='Banner'>
        <div className="innerbanner">
            
            <p id='first'>Get Started</p>
            <h2>Fill in the brief and get the project estimate</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <Button  className="innerbutton" >Get Started
            </Button>
            
        </div>
    </div>
  )
}

export default Banner
