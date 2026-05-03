import React from 'react'
import "./Homepage.css"
import HeroSectionOne from './homePage/HeroSectionOne'
import Category from "./homePage/Category"
import Instructors from "./homePage/Instructors"
import PopularCourses from "./homePage/PopularCourses"
import Testimonials from "./homePage/Testimonials"
import Newsletter from "./homePage/Newsletter"

const Homepage = () => {
  return (
    <div className='homepage'>
      <HeroSectionOne/>
      <Category />
      <PopularCourses />
      <Instructors />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Homepage
