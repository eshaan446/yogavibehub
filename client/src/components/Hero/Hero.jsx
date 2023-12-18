import React from "react";
import './Hero.css'
import Lottie from 'lottie-react'
import newanimation from './newanimation.json'
import animation2 from './animation2.json'
import animation from './animation.json'


const Hero = () => {
  return (
    <section className="hero-wrapper flexCenter">
      <div className="hero-section innerWidth">
        <div className="left flexCenter">
          <h1>
          Welcome to a Space of Tranquility. Explore Yoga's Transformative Path.
            <br />
            Join Us on a Journey of Self-Discovery!
          </h1>
          
          
        </div><br/>
        <div style={{display:"flex"}}>
        <Lottie style={{ marginTop:'1rem', height:'320px'}} className="innerWidth" animationData={newanimation}/>
        <Lottie style={{ marginTop:'1rem', height:'320px'}} className="innerWidth" animationData={animation}/>
        <Lottie style={{ marginTop:'1rem', height:'320px'}} className="innerWidth" animationData={animation2}/>
       
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
