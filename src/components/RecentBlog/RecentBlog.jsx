import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./RecentBlog.css";
import blogCardData from "./blogCardData.js";


const RecentBlog = ({newBlogData}) => {

  const dataToMap = newBlogData || blogCardData;
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
