import React from 'react'
import Herosection from './Herosection'
import FeatureSection from './FeatureSection'
import Workflowsection from './Workflowsection'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
       <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection/>
      <FeatureSection/>
      <Workflowsection/>
      <Pricing/>
      <Testimonial/>
     
     </div>
    </>
  )
}

export default Home
