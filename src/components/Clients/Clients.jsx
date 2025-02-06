import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Clients.css";
import person2 from "../../../public/person_2.jpg";
import cardtopicon from "../../../public/download.jpeg";
import person1 from "../../../public/person_1.jpg";
import person3 from "../../../public/person_3.jpg";

const clientData = [
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person2,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person1,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person3,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person1,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person3,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person3,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
  {
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: person2,
    name: "Roger Scott",
    field: "Marketing Manager",
  },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3 cards

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const updateCardsToShow = () => {
    setCardsToShow(window.innerWidth < 600 ? 1 : 3);
  };

  useEffect(() => {
    // Set initial cards to show
    updateCardsToShow();

    // Add event listener for window resize
    window.addEventListener("resize", updateCardsToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  return (
    <>
      <div className="client">
        <h1>Clients Says About Us?</h1>
        <div className="client-cards-area">
          {clientData
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((item, index) => (
              <Card
                className="customer-card"
                key={index}
              >
                <Card.Body className="relativecard">
                  <Card.Text
                    style={{
                      color: "#808080",
                      position: "relative",
                    }}
                  >
                    {item.paragraph}
                  </Card.Text>
                  <Card.Img
                    src={cardtopicon}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "-10%",
                      zIndex: "1",
                      backgroundColor: "transparent",
                    }}
                  />
                  <div className="cardinner">
                    <Card.Img
                      src={item.img}
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="imageside">
                      <Card.Text
                        style={{ fontWeight: "600", letterSpacing: "1px" }}
                      >
                        {item.name}
                      </Card.Text>
                      <Card.Text
                        style={{
                          color: "#808080",
                          fontSize: "12px",
                          letterSpacing: "1px",
                        }}
                      >
                        {item.field}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </div>
        <div
          className="dots-container"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: Math.ceil(clientData.length / cardsToShow) }).map(
            (_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: currentIndex === index ? "red" : "lightgray",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Clients;