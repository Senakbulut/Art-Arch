import React from "react";
import { FaBars } from "react-icons/fa";

import './Navbar.css'
function Navbar() {


  return (
    <div>
      <nav>
          <ul>
      <li class="logo" ><a href="#">ART & ARCH</a></li>
			<li class="menu"><a href="#">Home</a></li>
			<li class="menu"><a href="#">About Us</a></li>
			<li class="menu"><a href="#">Gallery</a></li>
			<li class="menu"><a href="#">Contact</a></li>
			<li class="btn"><i><FaBars/></i></li>

          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
