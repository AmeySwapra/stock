import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import InquiryForm from '../components/common/InquiryForm'
import FloatingButtons from '../components/common/FloatingButtons'
import Courses from '../components/Courses'

function CoursesPage() {
  return (
    <>
      <Header/>
      <Courses/>
      <InquiryForm/>
      <FloatingButtons/>
      <Footer/>
    </>
  )
}

export default CoursesPage