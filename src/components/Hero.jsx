import React from 'react'
import heroImage from '../assets/Hero-Desktop-M365-Icon-Bounce-Premium-Left.avif'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <section className='hero'>
      <img src={heroImage} alt="Hero Image"  className='hero-image'/>

      <div className="hero-content">
        <h1>Go further with Copilot</h1>
        <p>With Microsoft 365, get productivity apps with Copilot, advanced AI features and cloud storage all in one plan.</p>

        <a className='hero-content-icon' href="">Shop Microsoft 365</a>
      </div>
    </section>
    </>
  )
}

export default Hero