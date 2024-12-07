import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Navbar />
     <div className='max-w-7xl mx-auto pt-20 sm:px-6 p-8'>
     <Hero />
     <Features />
     <WorkFlow />
     <Pricing />
     <Testimonial />
     <Footer />
     </div>
    </>
  )
}

export default App