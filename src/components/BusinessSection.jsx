import React from 'react'
import './BusinessSection.css'
import businessImageOne from '../assets/business-image-one.avif'
import businessImageTwo from '../assets/business-image-two.avif'
import businessImageThree from '../assets/business-image-three.avif'
import businessImageFour from '../assets/business-image-four.avif'


const BusinessSection = () => {
  return (
    <>
    <div className="business-section">
       <h2 className='business-text'>For business</h2>
      <div className="business-card-section">
        <div className="business-card-item">
          <img className='business-card-image' src={businessImageOne} alt="" />
          <div className='class-inner-text'>
            <h3>Microsoft 365 Copilot</h3>
            <p>Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
            <a className='business-card-anchor' href="">Learn more</a>
          </div>
        </div>


        <div className="business-card-item">
          <img className='business-card-image' src={businessImageTwo} alt="" />
          <div className='class-inner-text'>
            <h3>Visual Studio 2026</h3>
            <p>Unleash potential with the world's most popular IDE for the professional developer.</p>
            <a className='business-card-anchor' href="">Download Visual Studio</a>
          </div>
        </div>


       <div className="business-card-item">
          <img className='business-card-image' src={businessImageThree} alt="" />
          <div className='class-inner-text'>
            <h3>Get Microsoft Teams for your business</h3>
            <p>Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.</p>
            <a className='business-card-anchor-third' href="">Find the right plan for your business</a>
          </div>
        </div>


        <div className="business-card-item">
          <img className='business-card-image' src={businessImageFour} alt="" />
         <div className='class-inner-text'>
            <h3>Welcome to your Windows 365 Cloud PC</h3>
            <p>Securely stream your Windows experience from the Microsoft cloud to any device.</p>
            <a className='business-card-anchor' href="">Get it today</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BusinessSection