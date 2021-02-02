import React from "react";
import "./About.css";
import {Fade} from 'react-reveal';
function About() {
  return (
    <div>
      <div className="container-about">
        <div className="header-about">
          <h1>About Us</h1>
        </div>
        <Fade right duration={2000}>
        <div className="circle-image">
          <img src="images/image4.png" alt="" />
        </div>
        </Fade>
        <Fade right duration={2000}>
        <div className="rectangle">
          <p>
              Art & Arch offers you the opportunity to see the most interesting
            and modern architectural structures from an art perspective. Art &
            Arch chooses the most beautiful buildings for you and offers you a
            great viewing pleasure. Please browse our site as you wish and Enjoy
            among the photos we have chosen for you.<br/><br/>
            Wouldn't you like to see places you've never been to as if they were there?
            <br/><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;So let's get started!
          </p>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
