import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/HomePage/Services';
import Footer from './components/pages/Footer/Footer';
import Carousel from "react-elastic-carousel";
import Contact from './components/pages/HomePage/Contact';
import About from './components/pages/HomePage/About';

function App() {
  return (
    <Router>
      
      {/* Navigation bar Component */}
      <Navbar />

      {/* using Switch and Route to navigate to pages */}
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/About' href="aboutContainer" component={About}/>
        <Route path='/Services' exact component={Services}/>
        <Route path='/Contact' component={Contact}/>
      </Switch>

      {/* Footer Componenet */}
      <Footer /> 

    </Router>
  );
}

export default App;

// function bgChanger() {

//   // If the window size reaches the middle of the screen
//   // start transitioning the bacground color...
//   if(this.scrollY > this.innerHeight / 1.5) {
//     document.body.classList.add("bg-active");
//     // document.getElementsByClassName('bg-active') = 'gray';
    
//   }
//   // else{
//   //   document.body.classList.remove("bg-acitve")
//   // }
// }

// window.addEventListener("scroll", bgChanger);
