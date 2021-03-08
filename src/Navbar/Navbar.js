import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {


  return (
    <div>
      <nav>
          <ul>
      <Link to="/" className="logo" >ART & ARCH</Link>
			<Link to="/" className="menu">Home</Link>
			<Link to="/about" className="menu">About Us</Link>
			<Link to="/gallery" className="menu">Gallery</Link>
			<Link to="/contact" className="menu">Contact</Link>
			<li className="btn"><i><FaBars/></i></li>

          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
