import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink } from  "react-router-dom";



const Navbar = () =>{
    return(
        <>
        <div className=" container col3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Balaji Technical</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-lg-auto" id="navbarSupportedContent">
      <ul className="navbar-nav   mb-2  ml-3 mb-lg-0">
        <li  className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/service">service</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/About">About</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="contact">contact</NavLink>
        </li>
        
      
      </ul>
    
    </div>
  </div>
</nav>
  </div>
        </>
    )
}

export default Navbar;