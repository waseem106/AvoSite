import React from 'react'
import './ContactPage.css'
import Header from '../../components/AboutComponents/Header'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactComponent/ContactSection'

const ContactPage = () => {
    const headerData={
        link1:'Home',
        link2:'Contact',
        title:'Contact'
      }
  return (
    <div>
            <Header data={headerData} contactcolor={'#D1002C'}/>
            <ContactSection/>
            <Footer/>
    </div>
  )
}

export default ContactPage
