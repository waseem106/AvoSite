import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";
import image1 from "../../../public/bg_1.jpg";
import image2 from "../../../public/bg_2.jpg";
import NavbarTop from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const images = [{ image: image1 }, { image: image2 }];

const CustomCarousel = () => {
  const [isSticky, setIsSticky] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const carouselHeight = document.querySelector(".carousel-container").offsetHeight;

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
    <div className="carousel-container">
      {/* <div className="header"> */}
      <div className={`header ${isSticky ? 'sticky' : ''}`}>
        <NavbarTop isSticky={isSticky} /> 
      </div>

      <div className="carasole">
        <Carousel interval={300} controls={false} indicators={false} touch={true}>
          {images.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 carousel-image" src={item.image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="content">
        <div className="left">
          <h1>We Create modern & minimal website</h1>
          <p style={{ color: "#808080" }}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <Button
            style={{
              backgroundColor: "#D1002C",
              border: "1px solid #D1002C",
              borderRadius: "2px",
              padding: "15px",
            }}
          >
            Explore Projects
          </Button>
        </div>
        <div className="right">
          <h1 style={{ fontSize: " 40px" }}>
            400
            <span style={{ color: "#D1002C", fontWeight: "800", fontSize: "40px" }}>|</span>
          </h1>
          <p style={{ color: "#808080" }}>More than a hundred successful projects</p>
        </div>
      </div>

      <div className="playbuttton">
        <a href="#">
          <FontAwesomeIcon icon={faPlay} />
        </a>
      </div>
    </div>
  );
};

export default CustomCarousel;