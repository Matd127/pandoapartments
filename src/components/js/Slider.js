import React from "react";
import "../css/Slider.css";
import villa from "../img/villa.jpg";
import marbella from "../img/marbella.jpg";
import house12 from "../img/house12.jpg";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div>
      <Carousel indicators={false} className="slider_s">
        <Carousel.Item>
          <img
            className="d-block slider_s"
            src={villa}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider_s"
            src={marbella}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider_s"
            src={house12}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
