import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Save More on App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sell on Baraz</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Tral and order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">SignUP / Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Baraz Affliate Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Language</a>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;