import React from 'react'
import './Contact.css' 
import {HiMail} from 'react-icons/hi'
import {FaMedium, FaLinkedin, FaGithub} from 'react-icons/fa'

function Contact() {
    return (
        <div>
            <div className="containerContact">
            <div className="mainContact">
                        <h1>Contact</h1>
                        <div className="textSocial">
                         
                                <p> Mail </p>
                                <HiMail/>
                                <a  href="mailto:senaakbulut16@gmail.com">senaakbulut16@gmail.com </a>
                                <p>Medium</p>
                                <FaMedium/>
                                <a href="https://medium.com/@senaakbulut">senaakbulut</a>
                                <p>Linkedin</p>
                                <FaLinkedin/>
                                <a href="https://www.linkedin.com/in/senaakbulut">senaakbulut</a>
                                <p>Github</p>
                                <FaGithub/>
                                <a href="https://github.com/Senakbulut">Senakbulut</a>
                       
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49025.74085276199!2d39.69705665014816!3d40.99310172048501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c066bf2ec89%3A0xc4390aca748c2b71!2sTrabzon%2C%20Ortahisar%2FTrabzon!5e0!3m2!1str!2str!4v1615217571107!5m2!1str!2str" width="400" height="300"  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                <div className="backgroundContact"></div>
            </div>
        </div>
    )
}

export default Contact
