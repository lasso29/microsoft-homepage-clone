import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import BusinessSection from './components/BusinessSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <ProductCard></ProductCard>
    <BusinessSection></BusinessSection>
    <Footer></Footer>
    </>
  )
}

export default App