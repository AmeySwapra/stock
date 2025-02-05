import React from 'react'
import Header from '../components/common/Header'
import StockMarketPage from '../components/StockMarketPage'
import Footer from '../components/common/Footer'
import InquiryForm from '../components/common/InquiryForm'
import FloatingButtons from '../components/common/FloatingButtons'

function AboutPage() {
  return (
    <>
      <Header/>
      <StockMarketPage/>
      <InquiryForm/>
      <FloatingButtons/>
      <Footer/>
    </>
  )
}

export default AboutPage