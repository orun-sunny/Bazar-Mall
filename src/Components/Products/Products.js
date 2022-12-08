import React from 'react';
import f1 from '../../../src/baraz-assets-main/images/f1.jpg';
import f2 from '../../../src/baraz-assets-main/images/f2.jpg';
import f3 from '../../../src/baraz-assets-main/images/f3.jpg';
import f4 from '../../../src/baraz-assets-main/images/f4.jpg';
import f5 from '../../../src/baraz-assets-main/images/f5.jpg';
import f6 from '../../../src/baraz-assets-main/images/f6.jpg';

const Products = (props) => {
    console.log(props)
    return (
        <div className='bg-brand'>
           
        <div className="container py-5">
        <h1 className='fs-5'>FlashSale</h1>
        <div className='d-flex flex-wrap flashsale-container'>
                <div className="col-lg-2 col-md-4 col-sm-6  p-2 card-body">
                    <img src={f1} className="img-fluid" alt="flashsale" />
                    <p className='card-title'>Buds air wireless Bluetooth Headset in Ear ..</p>
                    <h3 className='card-price'>৳433</h3>
                    <h4 className='card-text'> <strike className='text-muted'>৳433</strike>-48%</h4>
                   
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={f2} className="img-fluid" alt="flashsale" />
                    <p className='card-title'>Buds air wireless Bluetooth Headset in Ear ..</p>
                    <h3 className='card-price'>৳433</h3>
                    <h4 className='card-text'> <strike className='text-muted'>৳433%</strike>-48%</h4>
                
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={f3} className="img-fluid" alt="flashsale" />
                    <p className='card-title'>TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                    <h3 className='card-price'>৳400</h3>
                    <h3 className='card-text'> <strike className='text-muted'>৳600</strike>-63%</h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={f4} className="img-fluid" alt="flashsale" />
                    <p className='card-title'> TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                    <h3 className='card-price'>৳135</h3>
                    <h3 className='card-text'> <strike className='text-muted'>৳600</strike> -33%</h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={f5} className="img-fluid"   alt="" />
                    <p className='card-title'>Vivo in Ear Earphone Best sound quality for any...</p>
                    <h3 className='card-price'>৳135</h3>
                    <h3 className='card-text'> <strike className='text-muted'>-33%</strike></h3>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                    <img src={f6} className="img-fluid"  alt="" />
                    <p className='card-title'>Electric Hot Water Bag pain remover [Multicolor]</p>
                    <h3 className='card-price'>৳135</h3>
                    <h3 className='card-text'> <strike className='text-muted'>-73%</strike></h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Products;