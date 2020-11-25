import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import { Paper, makeStyles } from '@material-ui/core';

import './Contact.css'
import Aos from "aos";
import "aos/dist/aos.css"

const useStyles = makeStyles(theme => ({
    pageContent: {
        // margin: theme.spacing(5),
        padding: theme.spacing(3),
        
    }
}))

function Contact() {
    // to animate with scroll 
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const classes = useStyles();
    
    return (
        <div id="contact-page" className="contact-page">
            <div>
                {/* <h1 className="pageTitle">Contact Us</h1> */}
                <h1 className="pageTitle" data-aos="fade-down">Contact Us</h1>
                <p className="text-center w-responsive mx-auto">
                    Email us with any questions or inquiries and Engine Dome representative will reply to you as soon as possible. We would be happy to answer your questions and set up a meeting with you. 
                </p>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
