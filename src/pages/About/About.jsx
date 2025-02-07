import React from 'react'
import './About.css'
import Header from '../../components/AboutComponents/Header'
import About from '../../components/AboutUs/About'
import Welcome from '../../components/welcome/Welcome'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Clients from '../../components/Clients/Clients'
import ExpertTeam from '../../components/AboutComponents/ExpertTeam/ExpertTeam'




const AboutPage = () => {

  const headerData={
    link1:'Home',
    link2:'About',
    title:'About Us'
  }

  return (
    <div>
      <Header data={headerData} aboutColor={'red'}/>
      <About/>
      <Welcome/>
      <Banner/>
      <ExpertTeam/>
      <Clients/>
      <div className='footermargin'>
      <Footer/>
      </div>
    </div>
  )
}

export default AboutPage
