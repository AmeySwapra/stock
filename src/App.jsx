import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import GalleryPage from './pages/GalleryPage'
import SingleCoursePage from './pages/SingleCoursePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/Courses' element={<CoursesPage/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/course/:title' element={<SingleCoursePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App