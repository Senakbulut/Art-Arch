import React from "react";
import { FaBars } from "react-icons/fa";

import './Navbar.css'
function Navbar() {


  return (
    <div>
      <nav>
          <ul>
      <li className="logo" ><a href="#">ART & ARCH</a></li>
			<li className="menu"><a href="#">Home</a></li>
			<li className="menu"><a href="#">About Us</a></li>
			<li className="menu"><a href="#">Gallery</a></li>
			<li className="menu"><a href="#">Contact</a></li>
			<li className="btn"><i><FaBars/></i></li>

          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
