
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MetaTags from '../SEO/MetaTag'

const Main = () => {
  return (
    <div>
      <Header/>
      <main>
    
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Main