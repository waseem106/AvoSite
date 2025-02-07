import React from 'react'
import './TeamCard.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebook,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';


const TeamCard = ({data}) => {
  return (
    <div className='iconshover'>
    
        <Card className='TeamCard' >
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.role}
          </Card.Text>
       
        </Card.Body>
      </Card>

        <div className="team-social-icons">
        <FontAwesomeIcon icon={faTwitter}  className='icons-circle'/>
        <FontAwesomeIcon icon={faFacebook} className='icons-circle'/>
        <FontAwesomeIcon icon={faGoogle}  className='icons-circle'/>
        <FontAwesomeIcon icon={faInstagram}  className='icons-circle'/>
        </div>
     
    </div>
  )
}

export default TeamCard
