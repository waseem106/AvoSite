import React from 'react'
import './About.css'
import image1 from '../../../public/icons8-linux-server-100.png'
import image2 from '../../../public/icons8-web-development-100.png'
import image3 from '../../../public/icons8-layers-100.png'
import image4 from '../../../public/icons8-mobile-app-100.png'
import image5 from '../../../public/icons8-search-100.png'



const cardsData=[
  {image:image1,
   name:'UI/UX Design', 
  },
  {image:image2,
    name:'Web Development', 
   },
   {image:image3,
    name:'Product Design', 
   },
   {image:image4,
    name:'Mobile Apps', 
   },
   {image:image5,
    name:'SEO', 
   }
]

const About = () => {
  return (
    <div className='aboutus'>

      <div className="heading">
        About Us 
      </div>

      <div className="detail">
        {cardsData.map((item,index)=>(
          <div className='card' key={index}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About
