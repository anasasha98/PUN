import React, { Fragment } from 'react'
import HeroSection from '../component/Hero-Section/HeroSection'
import CompanySection from '../component/Company-Section/CompanySection'
import AboutUs from '../component/About-us/AboutUs'
import Courses from '../component/Courses-section/Courses';
import ChooseUs from '../component/Choose-us/ChooseUs';
import Features from '../component/Feature-section/Features';
import FreeCourse from '../component/Free-course-section/FreeCourse';
import Testimonials from '../component/Testimonial/Testimonials';
import Newsletter from '../component/Newsletter/Newsletter';

const Home = () => {
  return (
    <Fragment>
    <HeroSection/>
    <CompanySection/>
    <AboutUs/>
    <Courses/>
    <ChooseUs/>
    <Features/>
    <FreeCourse/>
    <Testimonials/>
    <Newsletter/>
    </Fragment>
  )
}

export default Home