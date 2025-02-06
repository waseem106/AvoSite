import React from 'react'
import CustomCarousel from '../components/CustomCarrasole/CustomCarrasole'
import './Homepage.css'
import About from '../components/AboutUs/About'
import Welcome from '../components/welcome/Welcome'
import Works from '../components/OurWorks/Works'
import Clients from '../components/Clients/Clients'
import Banner from '../components/Banner/Banner'
import RecentBlog from '../components/RecentBlog/RecentBlog'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <CustomCarousel/>
      <About/>
      <Welcome/>
      <Works/>
      <Clients/>
      <Banner/>
      <RecentBlog/>
      <Footer/>
    </div>
  )
}

export default Homepage
