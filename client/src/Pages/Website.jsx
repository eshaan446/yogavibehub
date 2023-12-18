import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Utility from '../components/Utility/Utility';
import GetStarted from '../components/GetStarted/GetStarted';
import Footer from '../components/Footer/Footer';

const Website = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <GetStarted/>
      <Utility/>
      <Footer/>
    </div>
  )
}

export default Website