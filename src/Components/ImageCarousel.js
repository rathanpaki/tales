// ImageCarousel.js
import React, { useState } from 'react';
import './ImageCarousel.css';
import image1 from './MvKpqrtkQb6RILaWujRnpQ.webp';
import image2 from './NuvkMBIWStqXKs1LUybpqQ.jpeg';
import image3 from './aJejGpjMRt-ubITmxIIi9A.webp';

const ImageCarousel = () => {
  const images = [image1,image2,image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button left-button">❮</button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={nextSlide} className="carousel-button right-button">❯</button>
    </div>
  );
};

export default ImageCarousel;
