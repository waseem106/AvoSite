import React from 'react'
import './BlogPage.css'
import Header from '../../components/AboutComponents/Header'
import RecentBlog from '../../components/RecentBlog/RecentBlog'
import Footer from '../../components/Footer/Footer'
import newBlogData from './newBlogData.js'

const BlogPage = () => {
    
    const headerData={
        link1:'Home',
        link2:'Blog',
        title:'Blog'
      }

  return (
    <div>
      <Header data={headerData} blogcar={'red'}/>
      <RecentBlog style={{backgroundColor:'white'}} newBlogData={newBlogData}/>
      <Footer/>
    </div>
  )
}

export default BlogPage
