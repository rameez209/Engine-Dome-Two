import React, { useEffect } from 'react'
import "./Services.css"

import Aos from "aos";
import "aos/dist/aos.css"


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    FcServices, 
    FcSearch,
    FcTemplate,
    FcMultipleSmartphones,
    FcAcceptDatabase,
    FcBriefcase
 } from "react-icons/fc";

const Services = () => {

    // to animate with scroll 
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div id="services-section" className="services-section" >
            <h1 className="pageTitle" data-aos="fade-down"><FcServices size={30} /> Our Services</h1>
            <div className="services-wrapper container-fluid">

                {/* <div className="circle-img" data-aos="flip-left">
                    <img className="services-img" src="images/imgWraper.svg" />
                </div> */}
                
                <div className="business-solutions ">
                    <p className="services-list" data-aos="fade-right">
                        <FcSearch size={30} className="servics-icon" /> &ensp;
                        SEO:  One of our main specializations is SEO (search engine optimization). We help implement changes to
                        your website, making changes to your design and content to help get more customers directed to your business.
                    </p>
                    <p className="services-list" data-aos="fade-left">
                        <FcTemplate size={30} className="servics-icon"/> &ensp;
                        Web Development: We offer developing websites for you and your business to help meet the
                        competitive market. Writing markup, coding and the design of the website. We also provide
                        maintenance and database management for your website.</p>
                    <p className="services-list" data-aos="fade-right">
                        <FcMultipleSmartphones size={30} className="servics-icon"/> &ensp;
                        App Development: EngineDome also specializes in App Development. We develop mobile apps for
                        Android and iOS and focus on making it user friendly with the specific customer needs. We provide App
                        management and maintenance.</p>
                    <p className="services-list" data-aos="fade-left">
                        <FcAcceptDatabase size={30} className="servics-icon"/> &ensp;
                        Hosting: We offer to host your website on our database and make it accessible to everyone on the web.
                            Hosting with us will help keep your website secure, up to date and running.</p>
                    <p className="services-list" data-aos="fade-up"><FcBriefcase size={30} className="servics-icon"/> &ensp;
                      Social Media Marketing: With our broad experience in different Social Media platforms, we can provide exposure to your business through Social Media Marketing. 
                     </p>
                </div>
            </div>
        </div>
    )
}


export default Services
