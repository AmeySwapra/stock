import React from 'react'
import Header from '../components/common/Header'
import CourseDetail from '../components/common/CourseDetail'
import FloatingButtons from '../components/common/FloatingButtons'
import InquiryForm from '../components/common/InquiryForm'
import Footer from '../components/common/Footer'

function SingleCoursePage() {
  return (
    <>
      <Header/>
      <CourseDetail/>
      <FloatingButtons/>
      <InquiryForm/>
      <Footer/>
    </>
  )
}

export default SingleCoursePage