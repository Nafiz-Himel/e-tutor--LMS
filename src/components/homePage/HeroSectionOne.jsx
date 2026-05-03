import React, { useState } from 'react'
import "./HeroSectionOne.css"
import HeroImg from "../../assets/HeroSectionOne.png";
import SignupModal from "../SignupModal/SignupModal";
import { useLanguage } from "../../hooks/useLanguage";

const HeroSectionOne = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  return (
    <div className='heroSectionOne'>
        <div className="para-part">
          <div className="heading">
            <h1>{t.hero.heading}</h1>
          </div>
          <div className="long-para">
            <p>{t.hero.para}</p>
          </div>
          <div className="btn-hero">
            <button className='btn-create-hero' onClick={() => setShowModal(true)}>{t.hero.btnCreateAccount}</button>
          </div>
        </div>
        <div className="pic-part">
            <img src={HeroImg} alt="hero-pic" />
        </div>
      
        <SignupModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default HeroSectionOne
