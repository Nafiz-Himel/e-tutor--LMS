import React from 'react'
import "./HeroSectionOne.css"
import HeroImg from "../../assets/HeroSectionOne.png";

const HeroSectionOne = () => {
  return (
    <div className='heroSectionOne'>
        <div className="para-part">
          <div className="heading">
            <h1>Learn with expert anytimxe anywhere</h1>
          </div>
          <div className="long-para">
            <p>Our mision is to help people to find the best course online and learn with expert antime, anywhere.</p>
          </div>
          <div className="btn-hero">
            <button className='btn-create-hero'>Create Account</button>
          </div>
        </div>
        <div className="pic-part">
            <img src={HeroImg} alt="hero-pic" />
        </div>
      
    </div>
  )
}

export default HeroSectionOne
