import React from "react";
import { Link } from "react-router-dom";
import '../../style_new.css';
const Navbar = () => {
  return (
    
    <>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center">
          <h1 class="m-0">
            <i class="fa fa-building text-primary me-3"></i>APEX
          </h1>
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-3 py-lg-0">
            <Link to="/" class="nav-item nav-link active">Home</Link>
            <Link to="/about-us" class="nav-item nav-link">About</Link>
            <Link to="/our-services" class="nav-item nav-link">Our Services</Link>
            <Link to="/features-page" class="nav-item nav-link">Features</Link>
            <Link to="/contact-page"class="nav-item nav-link">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
  
export default Navbar;