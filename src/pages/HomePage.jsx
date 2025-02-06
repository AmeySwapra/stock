import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import SIPCalculator from '../components/SIPCalculator'
import AboutSection from '../components/AboutSection'
import Carousel from '../components/common/Carousel'
import FloatingButtons from '../components/common/FloatingButtons'
import Courses from '../components/Courses'
import Counter from '../components/Counter'
import Testimonial from '../components/Testimonial'
import ImportanceOfTrading from '../components/ImportanceOfTrading'
import Topbar from '../components/common/Topbar'


function HomePage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Carousel/>
      <AboutSection/>
      <ImportanceOfTrading/>
      <FloatingButtons/>
      <Courses/>
      <SIPCalculator/>
      <Counter/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default HomePage