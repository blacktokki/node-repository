import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="">
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><a href="!#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
            <li><a href="!#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
          </ul>
          <div className="search-element">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250"/>
            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
            <div className="search-backdrop"></div>
            
            <div className="search-result">
              <div className="search-header">
                Histories
              </div>
              <div className="search-item">
                <a href="!#">How to hack NASA using CSS</a>
                <a href="!#" className="search-close"><i className="fas fa-times"></i></a>
              </div>
              <div className="search-item">
                <a href="!#">Kodinger.com</a>
                <a href="!#" className="search-close"><i className="fas fa-times"></i></a>
              </div>
              <div className="search-item">
                <a href="!#">#Stisla</a>
                <a href="!#" className="search-close"><i className="fas fa-times"></i></a>
              </div>
              <div className="search-header">
                Result
              </div>
              <div className="search-item">
                <a href="!#">
                  <img className="mr-3 rounded" width="30" src={process.env.PUBLIC_URL+"/assets/img/products/product-3-50.png"} alt="product"/>
                  oPhone S9 Limited Edition
                </a>
              </div>
              <div className="search-item">
                <a href="!#">
                  <img className="mr-3 rounded" width="30" src={process.env.PUBLIC_URL+"/assets/img/products/product-2-50.png"} alt="product"/>
                  Drone X2 New Gen-7
                </a>
              </div>
              <div className="search-item">
                <a href="!#">
                  <img className="mr-3 rounded" width="30" src={process.env.PUBLIC_URL+"/assets/img/products/product-1-50.png"} alt="product"/>
                  Headphone Blitz
                </a>
              </div>
              <div className="search-header">
                Projects
              </div>
              <div className="search-item">
                <a href="!#">
                  <div className="search-icon bg-danger text-white mr-3">
                    <i className="fas fa-code"></i>
                  </div>
                  Stisla Admin Template
                </a>
              </div>
              <div className="search-item">
                <a href="!#">
                  <div className="search-icon bg-primary text-white mr-3">
                    <i className="fas fa-laptop"></i>
                  </div>
                  Create a new Homepage Design
                </a>
              </div>
            </div>
          </div>
        </form>
        <ul className="navbar-nav navbar-right">
        </ul>
      </nav>
    </header>
  );
}

export default Header;
