import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import InquiryForm from '../components/common/InquiryForm'
import FloatingButtons from '../components/common/FloatingButtons'
import Gallery from '../components/Gallery'
import Topbar from '../components/common/Topbar'

function GalleryPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Gallery/>
      <InquiryForm/>
      <FloatingButtons/>
      <Footer/>
    </>
  )
}

export default GalleryPage