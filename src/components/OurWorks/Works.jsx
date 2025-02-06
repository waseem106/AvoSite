import React from 'react'
import './Works.css'
import person1 from '../../../public/person_1.jpg'
import person2 from '../../../public/person_2.jpg'
import person3 from '../../../public/person_3.jpg'
import image1 from '../../../public/work-1.jpg'
import image2 from '../../../public/work-2.jpg'
import image3 from '../../../public/work-3.jpg'
import image4 from '../../../public/work-4.jpg'
import image5 from '../../../public/work-5.jpg'
import image6 from '../../../public/work-6.jpg'


import { Button, Container } from 'react-bootstrap'


const Works = () => {
  return (
  
    <div className='works'>
        <div className="works-content">
          <h2>OUR WORKS</h2>

          <div className="works-cards">
            <img  className="card-image" src={image1} alt="" />

            <div className="card">
              <h4>Web Design</h4>
              <h2>Cassette tape</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="cardinner">
                <img src={person1} alt="" />
                <div className="imageside">
                  <h4>Jamie Jonson</h4>
                  <p>avo.com</p>
                </div>
              </div>
              <Button>View Portfolio</Button>
            </div>
          </div>

          <div className="works-cards">
            <div className="card">
              <h4>Application</h4>
              <h2>Miniwall Clock</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="cardinner">
                <img src={person2} alt="" />
                <div className="imageside">
                  <h4>Jamie Jonson</h4>
                  <p>avo.com</p>
                </div>
              </div>
              <Button>View Portfolio</Button>
            </div>

            <img  className="card-image" src={image2} alt="" />
          </div>


          <div className="works-cards">
            <img  className="card-image" src={image3} alt="" />
            <div className="card">
              <h4>Web Design</h4>
              <h2>Cassette tape</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="cardinner">
                <img src={person3} alt="" />
                <div className="imageside">
                  <h4>Jamie Jonson</h4>
                  <p>avo.com</p>
                </div>
              </div>
              <Button>View Portfolio</Button>
            </div>
          </div>

        
          <div className="works-cards">
            <div className="card">
              <h4>Web Development</h4>
              <h2>Hand Writing</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="cardinner">
                <img src={person2} alt="" />
                <div className="imageside">
                  <h4>Jamie Jonson</h4>
                  <p>avo.com</p>
                </div>
              </div>
              <Button>View Portfolio</Button>
            </div>
            <img  className="card-image" src={image4} alt="" />
          </div>
      
          <div className="works-cards">
            <img className="card-image" src={image5} alt="" />
            <div className="card">
              <h4>Illustration</h4>
              <h2>Keyboard</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="cardinner">
                <img src={person2} alt="" />
                <div className="imageside">
                  <h4>Jamie Jonson</h4>
                  <p>avo.com</p>
                </div>
              </div>
              <Button>View Portfolio</Button>
            </div>
          </div>


          <div className="works-cards">
            <div className="card">
              <h4>Web Development</h4>
              <h2>Spiral</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="cardinner">
                <img src={person2} alt="" />
                <div className="imageside">
                  <h4>Jamie Jonson</h4>
                  <p>avo.com</p>
                </div>
              </div>
              <Button>View Portfolio</Button>
            </div>
            <img className="card-image" src={image6} alt="" />
          </div>
      



      </div>
      <div className="bootom"></div>
    </div>

   
  )
}

export default Works
