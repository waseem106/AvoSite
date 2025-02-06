import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";


import "./RecentBlog.css";
import image1 from '../../../public/image_1.jpg'
import image2 from '../../../public/image_2.jpg'
import image3 from '../../../public/image_3.jpg'
import image4 from '../../../public/image_4.jpg'





const blogCardData=[
    {
        heading:'Amplify your blockchain team',
        img:image1,
        date:'JUNE 01, 2020',
        role:'ADMIN',
        comments:'3',
        detail:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
        heading:'Amplify your blockchain team',
        img:image2,
        date:'JUNE 01, 2020',
        role:'ADMIN',
        comments:'3',
        detail:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },    {
        heading:'Amplify your blockchain team',
        img:image3,
        date:'JUNE 01, 2020',
        role:'ADMIN',
        comments:'3',
        detail:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
        heading:'Amplify your blockchain team',
        img:image4,
        date:'JUNE 01, 2020',
        role:'ADMIN',
        comments:'3',
        detail:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },

]

const RecentBlog = () => {
  return (
    <div className="RecentBlog">
      <h3>RECENT BLOG</h3>

      <div className="recentblogcards">
    {blogCardData.map((item,index)=>(
         <Card
         key={index}
         className="BlogCard"
       >
         <Card.Body>
         <Card.Text style={{
          fontSize:'17px'
         }}>{item.heading}</Card.Text>
         <Card.Img
           src={item.img}
           style={{
            width:'100%',
            height:'50%'
           }}
         />
         <div className="flexblogcard">
          <Card.Text>{item.date}</Card.Text>
          <Card.Text>{item.role}</Card.Text>
          <Card.Text> <span><FontAwesomeIcon icon={faComment} /> </span>{item.comments}</Card.Text>
        </div>
          <Card.Text style={{color:'#808080'}} >{item.detail}</Card.Text>
         </Card.Body>
       </Card>

    ))}
       
      </div>

    </div>
  );
};

export default RecentBlog;
