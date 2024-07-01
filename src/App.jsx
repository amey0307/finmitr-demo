import React from 'react'
import NavbarComponentCopy from './components/NavbarComponentCopy.jsx'
import Hero from './pages/HeroSection.jsx'
import FeatureSection from './pages/FeatureSection.jsx'
import VisionInfo from './pages/VisionInfo.jsx'
import Recharge from './pages/Recharge.jsx'
import Carousel from './components/Crousal.jsx'
import img1 from "./assets/crousal/v1.mp4"
import img2 from "./assets/crousal/v2.mp4";
import img3 from "./assets/crousal/v3.mp4";

const slides = [img1, img2, img3, img1, img2];

function App() {
  return (
    <main className='min-h-[200vh]'>
      <NavbarComponentCopy />
      <div id='hero'>
        <Hero />
      </div>
      <div id='feature'>
        <FeatureSection />
      </div>
      <div className='mt-4' id='services'>
        <Recharge />
      </div>

      <div className="relative">
        <div className="">
          <Carousel>
            {
              slides.map((slide, i) => (
                <video src={slide} loop muted autoFocus autoPlay type="video/mp4" id={`vid-${i}`} />
              ))
            }
          </Carousel>
        </div>
      </div>

      <div id='vision'>
        <VisionInfo />
      </div>
    </main>
  )
}

export default App
