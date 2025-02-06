import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Contact from '../components/Contact'
import InquiryForm from '../components/common/InquiryForm'
import FloatingButtons from '../components/common/FloatingButtons'
import Topbar from '../components/common/Topbar'

function ContactPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Contact/>
      <InquiryForm/>
      <FloatingButtons/>
      <Footer/>
    </>
  )
}

export default ContactPage