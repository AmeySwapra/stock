import React from 'react'
import Header from '../components/common/Header'
import CourseDetail from '../components/common/CourseDetail'
import FloatingButtons from '../components/common/FloatingButtons'
import InquiryForm from '../components/common/InquiryForm'
import Footer from '../components/common/Footer'
import Topbar from '../components/common/Topbar'

function SingleCoursePage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <CourseDetail/>
      <FloatingButtons/>
      <InquiryForm/>
      <Footer/>
    </>
  )
}

export default SingleCoursePage