// import React, {useEffect} from 'react';
// import { Grid } from '@material-ui/core';
// import './ContactForm.css';
// import { UseForm, Form } from '../../UseForm';
// import Inputs from '../../controls/Inputs';
// // import RadioGroups from '../../controls/RadioGroups';
// import Buttons from '../../controls/Buttons';
// import Aos from "aos";
// import "aos/dist/aos.css"

// import emailjs from 'emailjs-com';


// // const domainItems = [
// //     {id: 'Yes', title:"Yes"},
// //     {id: 'No', title:"No"},
// // ]

// const initialFValues = {
//     id: 0,
//     fullName: '',
//     email: '',
//     businessName: '',
//     mobile: '',
//     isDomain: false,
//     domainName: '',
//     message: '',
// }

// const ContactForm = () =>{

//     // to animate with scroll 
//     useEffect(() => {
//         Aos.init({ duration: 1000 });
//     }, [])

//     const {
//         values,
//         // setValues,
//         handleInputChange
//     } = UseForm(initialFValues);

// // sendEmail() function sends email 

//     function sendEmail(e) {
//         e.preventDefault();
//     // template_r5w9j5l
//         emailjs.sendForm('service_6iupkrp','template_r5w9j5l', e.target, 'user_8zGErBYFWCkfmUd73qhhP')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//           e.target.reset();
//     }

//     return(

//         <Form onSubmit={sendEmail} style={{"color":"white"}} method="POST" action="send">
//             <Grid container spacing={0}  alignItems="left" justify-content="left" alignItems="center" style={{"marginLeft": '5%', minHeight: '500px', paddingBottom: '30px'}}>
//                 <Grid item xs={"auto"} >
//                     <Inputs 
//                         data-aos="slide-left"
//                         name="fullName"
//                         label="Full Name"
//                         value={values.fullName}
//                         onChange={handleInputChange}
//                     />
//                     <Inputs 
//                         data-aos="slide-right"
//                         name="email"
//                         label="Email"
//                         onChange={handleInputChange}
//                         value={values.email}
//                     />
//                     <Inputs 
//                         data-aos="slide-left"
//                         name="businessName"
//                         label="Business Name"
//                         onChange={handleInputChange}
//                         value={values.businessName}
//                     />
//                     <Inputs 
//                         data-aos="slide-right"
//                         name="phone"
//                         label="Phone"
//                         onChange={handleInputChange}
//                         value={values.phone}
//                     />
//                 </Grid>

//                 <Grid item xs={"auto"} style={{marginTop: 30}} >
//                     {/* <RadioGroups 
//                         data-aos="slide-left"
//                         name="Domain"
//                         label="Do you have domain name?"
//                         value={values.domainItems}
//                         onChange={handleInputChange}
//                         items={domainItems}
//                     />
//                         <Inputs 
//                             data-aos="slide-right"
//                             name="isDomain"
//                             label="Domain Name"
//                             value={values.domainName}
//                             onChange={handleInputChange}
//                         />  */}
//                         <Inputs 
//                             data-aos="slide-right"
//                             name="message"
//                             label="message"
//                             onChange={handleInputChange}
//                             value={values.message}
//                         />
//                     <div data-aos="slide-left" >
//                         <Buttons 
//                             type="Submit"
//                             text="Send"
//                             color="primary"
//                         />
//                         <Buttons 
//                             type="reset"
//                             text="Reset"
//                             color="default"
//                         />
//                     </div>
//                 </Grid>
                
//             </Grid>
//         </Form>
//     )
// }

// export default ContactForm;
import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';

// import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput,  MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
// import { faUser } from "@fortawesome/free-solid-svg-icons";



const ContactUs = () => {

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_6iupkrp','template_r5w9j5l', e.target, 'user_8zGErBYFWCkfmUd73qhhP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container">
        <div className="row">

        <div className="col-md-8 container">
            <form className="contact-form form grey-text" onSubmit={sendEmail}>
                <MDBRow>
                    <MDBCol md="6">
                        <div className="md-form mb-0">
                        <MDBInput label="Your name" name="from_name" icon="user" group type="text" validate error="wrong"
                        success="right" />
                        </div>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="md-form mb-0">
                        <MDBInput label="Phone Number" name="phone" icon="phone" group type="text" validate error="wrong"
                        success="right" />
                        </div>
                    </MDBCol>
                </MDBRow>
                <div className="md-form-2 form-sm">
                    <MDBInput label="Business Name" name="businessName" icon="suitcase" group type="text"
                        validate error="wrong" success="right"
                    />
                    <MDBInput label="Your email" name="user_email" icon="envelope" group type="email"
                        validate error="wrong" success="right"
                    />
                </div>

                <div className="md-form-2 form-sm">
                    <div>
                        <MDBInput label="Message" type="textarea" name="message" icon="pencil-alt" rows="4" />
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button type="submit" class="btn btn-primary">Send <i class="fas fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
        <div className="col-md map-content">
            <div className="icon-info mt-2">
                <div className="pl-3 pr-3">
                    <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                    <p>Stockton, CA 95212</p>
                </div >
                <div className="pl-3 pr-3">
                    <MDBIcon icon="phone" size="2x" className="blue-text" />
                    <p>+1 209 427 8500</p>
                </div >
                <div className="pl-3 pr-3">
                    <MDBIcon icon="envelope" size="2x" className="blue-text" />
                    <p>admin@enginedome.com</p>
                </div >
            </div>
        </div>
        </div>

    </div>
  );
}


export default ContactUs;