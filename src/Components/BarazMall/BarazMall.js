import React from 'react';
import './BarazMall.css'

import d1 from '../../../src/baraz-assets-main/images/d1.jpg';
import d2 from '../../../src/baraz-assets-main/images/d2.jpg';
import d3 from '../../../src/baraz-assets-main/images/d3.jpg';
import d4 from '../../../src/baraz-assets-main/images/d4.jpg';
import d5 from '../../../src/baraz-assets-main/images/d5.jpg';
import d6 from '../../../src/baraz-assets-main/images/d6.jpg';

const BarazMall = () => {
    return (
        <div className='bg-brand'>
           
        <div className="container py-5">
        <h1 className='fs-5'>ALL Bazar Here</h1>
        <div className='d-flex flex-wrap flashsale-container'>
                <div className="col-lg-2 col-md-4 col-sm-6  p-2 card-body">
                    <img src={d1} className="img-fluid" alt="flashsale" />
                    <p className='card-title'>Buds air wireless Bluetooth Headset in Ear ..</p>
                    <h3 className='card-price'>৳433</h3>
                    <h4 className='card-text'> <strike className='text-muted'>৳433</strike>-48%</h4>
                   
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={d2} className="img-fluid" alt="flashsale" />
                    <p className='card-title'>Buds air wireless Bluetooth Headset in Ear ..</p>
                    <h3 className='card-price'>৳433</h3>
                    <h4 className='card-text'> <strike className='text-muted'>৳433%</strike>-48%</h4>
                
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={d3} className="img-fluid" alt="flashsale" />
                    <p className='card-title'>TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                    <h3 className='card-price'>৳400</h3>
                    <h3 className='card-text'> <strike className='text-muted'>৳600</strike>-63%</h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={d4} className="img-fluid" alt="flashsale" />
                    <p className='card-title'> TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                    <h3 className='card-price'>৳135</h3>
                    <h3 className='card-text'> <strike className='text-muted'>৳600</strike> -33%</h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={d5} className="img-fluid"   alt="" />
                    <p className='card-title'>Vivo in Ear Earphone Best sound quality for any...</p>
                    <h3 className='card-price'>৳135</h3>
                    <h3 className='card-text'> <strike className='text-muted'>-33%</strike></h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={d6} className="img-fluid"  alt="" />
                    <p className='card-title'>Electric Hot Water Bag pain remover [Multicolor]</p>
                    <h3 className='card-price'>৳135</h3>
                    <h3 className='card-text'> <strike className='text-muted'>-73%</strike></h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BarazMall;