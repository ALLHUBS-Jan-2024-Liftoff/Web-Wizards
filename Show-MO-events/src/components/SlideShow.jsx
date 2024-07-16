import React, { useState } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3; // Total number of slides

  const plusSlides = (n) => {
    let newSlide = currentSlide + n;
    if (newSlide > totalSlides) {
      newSlide = 1; // Wrap around to the first slide
    } else if (newSlide < 1) {
      newSlide = totalSlides; // Wrap around to the last slide
    }
    setCurrentSlide(newSlide);
  };

  const currentSlideHandler = (n) => {
    setCurrentSlide(n);
  };

  return (
    <div className="slideshow-container" style={{ maxWidth: '100%', position: 'relative', margin: 'auto' }}>
      {/* Slides */}
      <div className="mySlides fade" style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
        <div className="numbertext">1 / 3</div>
        <img src="./src/asserts/st-arch.jpg" style={{ width: '100%' }} alt="Slide 1" />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade" style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
        <div className="numbertext">2 / 3</div>
        <img src="./src/asserts/KC.jpg" style={{ width: '100%' }} alt="Slide 2" />
        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade" style={{ display: currentSlide === 3 ? 'block' : 'none' }}>
        <div className="numbertext">3 / 3</div>
        <img src="./src/asserts/Cheifs.jpg" style={{ width: '100%' }} alt="Slide 3" />
        <div className="text">Caption Three</div>
      </div>

      {/* Previous and Next buttons */}
      <a className="prev" onClick={() => plusSlides(-1)} style={{ cursor: 'pointer', position: 'absolute', top: '50%', left: '0', width: 'auto', marginTop: '-22px', padding: '16px', color: 'white', fontWeight: 'bold', fontSize: '18px', transition: '0.6s ease', borderRadius: '0 3px 3px 0', userSelect: 'none' }}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)} style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: '0', width: 'auto', marginTop: '-22px', padding: '16px', color: 'white', fontWeight: 'bold', fontSize: '18px', transition: '0.6s ease', borderRadius: '3px 0 0 3px', userSelect: 'none' }}>&#10095;</a>

      {/* Dots/Circles */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <span className="dot" onClick={() => currentSlideHandler(1)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
        <span className="dot" onClick={() => currentSlideHandler(2)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
        <span className="dot" onClick={() => currentSlideHandler(3)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
      </div>
    </div>
  );
};

export default Slideshow;
