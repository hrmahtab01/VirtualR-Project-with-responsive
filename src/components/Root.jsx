import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Root = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Footer/>
     
     </div>
    </>
  )
}

export default Root
