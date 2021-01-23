import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="container-line">
          <div className="line">
            <div className="header">
              <h1>ART & ARCH</h1>
            </div>
            
             <div className="picture1">
            <img src="images/image3.png" alt=""/>
            </div>
            <div className="picture2">
              <img src="images/image2.png" alt=""/>
            </div>
            <div className="text">
            <p>The Most Modern and Interesting Buildings in the World</p>
            </div> 
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
