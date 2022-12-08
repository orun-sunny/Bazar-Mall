import React from 'react';
import './TopBanner.css';
import topImage from '../../baraz-assets-main/images/top.png'
import topBannerData from '../Data/TopBannerData';

const TopBanner = () => {
    return (
        <div className="bg-brand">
            <div className='container'>
                <img className='mx-auto d-block pt-2' src={topImage} alt="" />
                <div className='row'>
                    {
                        topBannerData.map(data =>
                            <div key={data.id} style={{borderRadius:"18px"}} className='col m-2 bg-white py-1'>
                        <img src={data.image} width='40' className='img-fluid' alt={data.name} />
                        <a href={data.link} className='text-decoration-none text-dark fw-bold ps-2'>Free Shipping</a>

                    </div>
                    )

                    }


                   
                </div>
            </div>
        </div>

    );
};

export default TopBanner;