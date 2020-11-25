import React from "react";
// import "./Card.css";
import "./Cards.css";
// React Icons 
import { 
    FaFacebook,
    FaInstagram,
    FaGmail,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

import Aos from "aos";
import "aos/dist/aos.css"

const Card = ({name, bgPhoto, photo, title, description}) => 
    <div className="container card-container" data-aos="fade-up">
        {/* <h1 className="heading">Meet The Team</h1> */}
        <div className="card-wrapper">
        <div className="card">
            <img className="card-img" src={bgPhoto} />
            <img className="profile-img" src={photo} />
            <h1>{name}</h1>
            <p className="job-title">{title}</p>
            <p className="about">{description}</p>
            <a href="#contact-page" className="btn">Contact</a> 
            <ul className="social-media" >
                <li><a href="#" ><FaFacebook className="icons" style={{color: '#3b5998'}, {hover:"color: orange"}} size={30} /></a></li>
                <li><a href="#" ><FaInstagram className="icons" style={{color: '#e6683c'}, {hover:"color: orange"}} size={30} /></a></li>
                <li><a href="#" ><FaLinkedin className="icons" style={{color: '#0E76A8'}, {hover:"color: orange"}} size={30} /></a></li>
                <li><a href="#" ><FaTwitter className="icons" style={{color: '#00ACEE'}, {hover:"color: orange"}} size={30} /></a></li>
            </ul>
        </div> 
        </div>
    </div>

export default Card;