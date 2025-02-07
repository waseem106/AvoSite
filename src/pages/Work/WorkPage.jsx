import React from 'react'
import './WorkPage.css'

import Header from '../../components/AboutComponents/Header'
import Works from '../../components/OurWorks/Works'
import Footer from '../../components/Footer/Footer'

const WorkPage = () => {

    const headerData={
        link1:'Home',
        link2:'Work',
        title:'Work'
      }

  return (
    <div>
      <Header data={headerData} workcolor={'red'}/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default WorkPage
