import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../../public/bg_1.jpg";
import image2 from "../../../public/bg_2.jpg";
import NavbarTop from "../Navbar/Navbar";


import './Header.css'

const images = [{ image: image1 }, { image: image2 }];

const Header = ({data ,aboutColor,workcolor,blogcar,contactcolor}) => {

    const{link1,link2,title}=data;

  const [isSticky, setIsSticky] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const carouselHeight = document.querySelector(".about-header-container").offsetHeight;

      if (window.scrollY > carouselHeight) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-header-container">
      <div className={`header ${isSticky ? 'sticky' : ''}`}>
        <NavbarTop isSticky={isSticky}  aboutColor={aboutColor} workcolor={workcolor}
        blogcar={blogcar} contactcolor={contactcolor}
        /> 
      </div>

      <div className="about-header-background ">
      
      </div>

      <div className="content-about">
        <div className="left-about">
            <ul className="about-content-list">
                <a href=""> <li>{link1} <span style={{color:'#D1002C',fontWeight:'800',fontSize:'16px'}}>&gt;</span></li></a>
                <li>{data.link2} <span style={{color:'#D1002C',fontWeight:'800',fontSize:'16px'}}>&gt;</span></li>
            </ul>
          <h1>{title}</h1>
        </div>

    
      </div>

      
    </div>
  );
};

export default Header;