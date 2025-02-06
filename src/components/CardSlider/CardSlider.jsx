import React, { useState } from 'react';
import { motion } from 'framer-motion';


const CardSlider = ({ data }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide}>Previous</button>
      <motion.div
        className="customer-card"
        key={index}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>{data[index].paragraph}</p> 
        <img src={data[index].img} alt={data[index].name} />
      </motion.div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default CardSlider;