import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
// import { Button } from './Button';

import Aos from "aos";
import "aos/dist/aos.css"
import Buttons from './controls/Buttons';

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    imgTwo,
    imgThree,
    alt,
    imgStart
}) {
        // to animate with scroll 
        useEffect(() => {
            Aos.init({ duration: 2000 });
        }, [])
    return (
        <>
        <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className='container'>
            <div
                className='row home__hero-row'
                style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                }}
            >
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div data-aos="fade-left"  className="top-line">{topLine}</div>
                        <h1 data-aos="fade-left"  className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        
                        <p data-aos="fade-left"  className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                        <a data-aos="fade-left" href="#services-section"><Buttons type="submit" text="Learn More" /></a>
                    </div>
                </div>
                <div className="col">
                    <div className="home__hero-img-wrapper">
                        <div>
                            <img src={img} alt={alt} data-aos="slide-up" className="home__hero-img" />
                        </div>
                        <div>
                            <img src={imgTwo} alt={alt} data-aos="flip-left" className="home__heroTwo-img" /> 
                        </div>
                        <div>
                            <img src={imgThree} alt={alt} data-aos="flip-right" className="home__heroThree-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default HeroSection
