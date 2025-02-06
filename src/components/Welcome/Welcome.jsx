import { faHourglass2 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button } from 'react-bootstrap'
import image1 from '../../../public/about.jpg'
import './Welcome.css'

const cardsData=[
    {
        heading:"Welcome to AVO A Personal Porfolio Web Agency",
        paragraph:"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        image:image1,
    },
    {
        paragraph:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        buttontext:'View all projects'
    }
]


const smallCard=[
    {
        number:'01',
        name:"Search Engine Optimization",
        paragraph:'Far far away, behind the word mountains',
    },
    {
        number:'02',
        name:"Search Engine Optimization",
        paragraph:'Far far away, behind the word mountains',
    },
    {
        number:'03',
        name:"Search Engine Optimization",
        paragraph:'Far far away, behind the word mountains',
    },

]

const Welcome = () => {
  return (
    <div className='welcome'>

      <div className="cards">
        {cardsData.map((item,index)=>
        (
            <div className="card" key={index}>
                {item.heading && <h2>{item.heading}</h2>}
                {item.paragraph && <p>{item.paragraph}</p>}
                {item.image && <img src={item.image}/>}
                {item.buttontext && <Button style={{
                    backgroundColor:'#D1002C',
                    border:'1px solid #D1002C',
                    borderRadius:'3px',
                    fontSize:'12px'
                    }}>{item.buttontext}</Button>}
            </div>
        )
        )}
      </div>
    
      <div className="downportion">
        
          
            {smallCard.map((data,index)=>(
                <div className="down" key={index}>

                    <div className="span">
                            <h2>{data.number}</h2>
                    </div>

                    <div className="flexheading">
                        <h2>{data.name}</h2>   
                        <p>{data.paragraph}</p> 
                    </div> 
                   
                </div>


            ))}

      </div>

      

    </div>
  )
}

export default Welcome
