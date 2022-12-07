import React from 'react';
import './TopBanner.css';
import feature1 from "../../baraz-assets-main/images/feature1.png";
import feature2 from "../../baraz-assets-main/images/feature2.png";
import feature3 from "../../baraz-assets-main/images/feature3.png";
import feature4 from "../../baraz-assets-main/images/feature4.png";

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className='container'>
                <img src="" alt="" />
                <div className='row'>
                    <div style={{borderRadius:"18px"}} className='col m-2 bg-white py-1'>
                        <img src={feature1} width='40' className='img-fluid' alt="" />
                        <a href="/" className='text-decoration-none text-dark fw-bold ps-2'>Free Shipping</a>

                    </div>
                    <div style={{borderRadius:"18px"}} className='col m-2 bg-white py-1'>
                        <img src={feature2} width='40' className='img-fluid' alt="" />
                        <a href="/" className='text-decoration-none text-dark fw-bold ps-2'>Grocery shopping</a>
                    </div>
                    <div style={{borderRadius:"18px"}} className='col m-2 bg-white py-1 '>
                        <img src={feature3} width='40' className='img-fluid' alt="" />
                        <a href="/" className='text-decoration-none text-dark fw-bold ps-2'>Sarazzz mall</a>

                    </div>
                    <div style={{borderRadius:"18px"}} className='col m-2 bg-white py-1'>
                        <img src={feature4} width='40' className='img-fluid' alt="" />
                        <a href="/" className='text-decoration-none text-dark fw-bold ps-2'>Digital Sheba</a>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopBanner;