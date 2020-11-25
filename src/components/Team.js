import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import './Team.css'
import './Cards.css'
// import './pages/HomePage/About.css'
import Card from "./Card";
import Carousel from "react-elastic-carousel";
import 'bootstrap/dist/css/bootstrap.min.css'

import Aos from "aos";
import "aos/dist/aos.css"


// function bgChanger() {
//     const aboutBody = document.getElementById("teamPage");
//     // If the window size reaches the middle of the screen
//     // start transitioning the bacground color...
//     if(this.scrollY > this.innerHeight / 2) {
//       aboutBody.classList.add("card-bg");
//     //   document.getElementsByClassName('bg-active') = 'gray';
//     }
//     else{
//       aboutBody.classList.remove("card-bg");
//     }
//   }
  
//   window.addEventListener("scroll", bgChanger);



const Team = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const breakPoints = [
        {width: 400, itemsToShow: 1},
        {width: 425, itemsToShow: 2},
        {width: 668, itemsToShow: 3},
        {width: 1000, itemsToShow: 4},
        {width: 1300, itemsToShow: 5}
    ]

    const bgImg = "images/backgroundimg.jpg"
    // const bgImg = "https://goldpaintphotography.com/wp-content/uploads/2019/09/MountShasta5D_thumb.jpg"
    
    const OmairImg = "https://static.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg"
    const AhmedImg = "images/ahmed profile pic.jpg"
    const FasilImg = "images/fasil profile pic.jpg"
    const RameezImg = "images/rameez hover.jpg"
    const danialImg = "images/danial profile pic.jpg"
    // const RameezHover = "images/rameez-hover.jpg";
    // const imgWrpr = "images/imgWraper.svg"
    const desc = "And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. "
    const omairDesc = "Never stopped smiling \n always in good mood\n Worked hard during the day and sleep like a baby at night"
    const rameezDesc = "The sleeves are always rolled up.\n The keyboard is always almost broken with blazing fast typing. \n and the projects are always finished before the deadline. Hello Ladies!!! ;)"
    

    return (
        <div id="teamPage" className="team__section card-bg">
            <h2 className="pageTitle" data-aos="fade-down">
                {/* <img src="images/ED logo 1x1.png" alt="engine dome logo"  className="myLogo" /> */}
                Meet The Team
            </h2>
            <Carousel breakPoints={breakPoints}>
                <Card 
                    className="card__container" 
                    bgPhoto={bgImg}  
                    photo={OmairImg} 
                    name="Omair Khan" 
                    title="SEO Team Lead"
                    description={omairDesc}
                    // socialMedia={}
                    />
                <Card 
                    className="card__container" 
                    bgPhoto={bgImg} 
                    photo={RameezImg}
                    //  onMouseEnter={(photo) => photo = RameezHover}
                    name="Rameez Mohammad" 
                    title="Lead Software Engineer" 
                    description={rameezDesc}
                    // socialMedia={socialMedia} 
                />
                <Card 
                    className="card__container" 
                    bgPhoto={bgImg} 
                    photo={FasilImg} 
                    name="Fasil Khan" 
                    title="Full Stack Software Developer"
                    description={desc}
                    // socialMedia={socialMedia} 
                />
                    
                <Card 
                    className="card__container" 
                    bgPhoto={bgImg} 
                    photo={OmairImg} 
                    name="Nasr Korain"
                    title="Web Designer"
                    description={desc}
                    // socialMedia={socialMedia}  
                />
                <Card 
                    className="card__container" 
                    bgPhoto={bgImg} 
                    photo={AhmedImg} 
                    name="Ahmed Alrahimee" 
                    title="Business Intelligence"
                    description={desc}
                    // socialMedia={socialMedia} 
                />
                <Card 
                    className="card__container" 
                    bgPhoto={bgImg} 
                    photo={danialImg} 
                    name="Danial Zaman" 
                    title="Infrastructure Engineer" 
                    description={desc}
                    // socialMedia={socialMedia} 
                />
            </Carousel>
        </div>
    )
}


export default Team;
