import React from "react";
import "./Gallery.css";
import { Link } from 'react-router-dom';
function Gallery() {
  return (
    <div>
      <div className="outer-container">
        <div className="text-header">
          <h1>Gallery</h1>
        </div>
        <div className="text-slide">
          <p>
            Would you like to see interesting and modern buildings of the world?
            <br />
            If your answer is yes, come on!
          </p>
        </div>
        <div className="container-gallery">
          <ul className="slides">
            <li id="slide1">
              <img src="images/image11.jpg" alt="" />
            </li>
            <li id="slide2">
              <img src="images/image5.jpg" alt="" />
            </li>
            <li id="slide3">
              <img src="images/image8.jpeg" alt="" />
            </li>
          </ul>

          <ul className="thumbnails">
            <li>
              <a href="#slide1">
                <img src="images/image11.jpg" />
              </a>
            </li>
            <li>
              <a href="#slide2">
                <img src="images/image5.jpg" />
              </a>
            </li>
            <li>
              <a href="#slide3">
                <img src="images/image8.jpeg" />
              </a>
            </li>
          </ul>
        </div>
       <div className="arrow">
         <a href="/detail">
         <img src="images/up-arrow.png" alt=""/>
         </a>
       </div>
        
      </div>
    </div>
  );
}

export default Gallery;
