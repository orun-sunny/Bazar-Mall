import React from 'react';
import './Carosel.css';
import slider1 from '../../../src/baraz-assets-main/images/slider1.jpg';
import slider2 from '../../../src/baraz-assets-main/images/slider2.jpg';
import slider3 from '../../../src/baraz-assets-main/images/slider3.jpg';
import slider4 from '../../../src/baraz-assets-main/images/slider4.jpg';
import slider5 from '../../../src/baraz-assets-main/images/slider5.jpg'

const Carosel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 img-fluid" alt="slider-product" />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 img-fluid" alt="slider-product" />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100 img-fluid" alt="slider-product" />
          </div>
          <div className="carousel-item">
            <img src={slider4} className="d-block w-100 img-fluid" alt="slider-product" />
          </div>
          <div className="carousel-item">
            <img src={slider5} className="d-block w-100 img-fluid" alt="slider-product" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carosel;