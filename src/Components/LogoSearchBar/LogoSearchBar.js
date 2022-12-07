import React from 'react';
import './LogoSearchbar.css';
import logo from '../../../src/baraz-assets-main/images/logo.png';


const LogoSearchBar = () => {
    return (
        <div className='container-fluid search-container pt-2 d-flex justify-content-center align-items-center'>
           {/* <h1> this is logo searchbar</h1> */}
           <img className='img-fluid' width='150' src={logo} alt="logo of Baraz" />
           <input type="text"  className='search-bar' placeholder='search in the baraz' />
           <button>Search</button>

            
        </div>
    );
};

export default LogoSearchBar;