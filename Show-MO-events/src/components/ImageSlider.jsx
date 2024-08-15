// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import cheifs from '../asserts/Cheifs.jpg';
import kc from '../asserts/KC.jpg';
import arch from '../asserts/st-arch.jpg';
import MO from '../asserts/MO-fair.png';
import Aqua from '../asserts/Aqua.jpg';

const images = [cheifs, kc, arch,MO,Aqua];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const sliderStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '800px', // Adjust the max-width as needed
    margin: 'auto',
    overflow: 'hidden'
  };

  const slidesStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(${-currentIndex * 100}%)`
  };

  const slideStyle = {
    minWidth: '100%',
    boxSizing: 'border-box'
  };

  const imgStyle = {
    width: '100%', // Ensure image fits the container
    height: '500px', // Set a fixed height for all images
    objectFit: 'cover' // Maintain aspect ratio and cover the container
  };

  return (
    <div style={sliderStyle}>
      <div style={slidesStyle}>
        {images.map((image, index) => (
          <div key={index} style={slideStyle}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={imgStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
