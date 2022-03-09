import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import slider5 from '../images/slider5.jpg'
import slider6 from '../images/slider6.jpg'
import slider7 from '../images/slider7.jpg'
import slider8 from '../images/slider8.jpg'
import slider9 from '../images/slider9.jpg'
import slider10 from '../images/slider10.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
<div className="slider__image"><img src={slider1} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider2} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider3} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider4} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider5} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider6} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider7} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider8} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider9} onDragStart={handleDragStart} alt="Guerrin" /></div>,
<div className="slider__image"><img src={slider10} onDragStart={handleDragStart} alt="Guerrin" /></div>,
];

const responsive = {
  0: {
    items: 2,
  },
  550: {
    items: 3
  },
  800: {
    items: 4
  },
  1000: {
    items: 5
  },
};

const Slider = () => {
  return (
    <div id="galeria" className="slider">
    <AliceCarousel
      infinite
      autoPlay
      mouseTracking={true}
      responsive={responsive}
      items={items}
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
    />
    </div>
  );
};

export default Slider;
