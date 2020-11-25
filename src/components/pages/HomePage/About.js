import React, { useEffect } from 'react'
import { render } from "react-dom";

import './About.css'

import Aos from "aos";
import "aos/dist/aos.css"

import { FcInfo } from "react-icons/fc";

 import { TiHtml5, TiCss3 } 
from "react-icons/ti";

import { BsBootstrap } from "react-icons/bs";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb} from "react-icons/di";


// function bgChanger() {
//   const aboutBody = document.getElementById("aboutPage");
//   // If the window size reaches the middle of the screen
//   // start transitioning the bacground color...
//   if(this.scrollY > this.innerHeight / 1.5) {
//     aboutBody.classList.add("bg-active");
//     // document.getElementsByClassName('bg-active') = 'gray';
    
//   }
//   else{
//     aboutBody.classList.remove("bg-acitve");
//   }
// }

// window.addEventListener("scroll", bgChanger);


export default function About() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    
    return (
        <div id="aboutPage" className="aboutContainer bg-active" style={{"overflowX":"hidden"}}>
            <h1 className="pageTitle" data-aos="fade-down"><FcInfo size={30} data-aos="fade-up" /> About Us</h1>
            <div className="aboutContent">
                <div className="aboutHeader">
                    <p data-aos="fade-up">We love what we do</p>
                </div>
                <div className="aboutPara">
                    <p data-aos="fade-down">
                        Adipisicing adipisicing occaecat proident nulla in id sunt enim dolor laborum adipisicing irure aliqua fugiat. 
                    Veniam sit cupidatat nulla veniam commodo officia minim cillum officia ipsum reprehenderit voluptate nulla sit. 
                    Culpa anim proident labore commodo nisi. Dolore sit adipisicing esse adipisicing excepteur in laboris deserunt 
                    occaecat ullamco est aute ipsum ipsum. Esse labore pariatur nisi duis est deserunt eu laboris ullamco proident eu. 
                    </p>
                </div>
            </div>
            <div className="iconsContent" >
                <div className="iconHeader" data-aos="fade-up">
                    <p> Tools and Technology We Use</p>
                </div>
                <div className="iconsList">
                    <div data-aos="slide-right">
                        <TiHtml5 className="devIcons" size={60} />
                    </div>
                    <div data-aos="slide-right">
                        <TiCss3 className="devIcons" size={60}/>
                    </div>
                    <div data-aos="slide-right">
                        <BsBootstrap className="devIcons" size={60}/>
                    </div>
                    <div data-aos="slide-up">
                        <DiJavascript1 className="devIcons" size={60}/>
                    </div>
                    <div data-aos="slide-left">
                        <DiReact className="devIcons" size={60}/>
                    </div>
                    <div data-aos="slide-left">
                        <DiNodejs className="devIcons" size={60}/>
                    </div>
                    <div data-aos="slide-left">
                        <DiMongodb className="devIcons" size={60}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
