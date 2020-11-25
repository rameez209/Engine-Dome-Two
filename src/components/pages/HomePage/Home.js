import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data';
import Team from '../../Team';
import Services from './Services';
import Contact from './Contact';
import About from './About';


function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />   
        <About  />
         <Services />
         <Team /> 
         <Contact />
        </>
    )
}

export default Home
