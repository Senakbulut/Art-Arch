import React from 'react'
import './Gallery.css'
function Gallery() {
    return (
        <div>
            <div className="outer-container">
                <div className="text-header">
                    <h1>Gallery</h1>
                </div>
                
           <div className="container-gallery">
             <ul className="slides">
                  <li id="slide1"><img src="images/image11.jpg" alt="" /></li>
                  <li id="slide2"><img src="images/image5.jpg" alt="" /></li>
                  <li id="slide3"><img src="images/image8.jpeg" alt="" /></li>
    {/* <li id="slide4"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" alt="" /></li>
    <li id="slide5"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" /></li> */}
            </ul>

  <ul className="thumbnails">
    <li>
      <a href="#slide1"><img src="images/image11.jpg" /></a>
    </li>
    <li>
      <a href="#slide2"><img src="images/image5.jpg" /></a>
    </li>
    <li>
      <a href="#slide3"><img src="images/image8.jpeg" /></a>
    </li>
    {/* <li>
      <a href="#slide4"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" /></a>
    </li>
    <li>
      <a href="#slide5"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" /></a>
    </li> */}
  </ul>
</div>
        </div>
        </div>
    )
}

export default Gallery
