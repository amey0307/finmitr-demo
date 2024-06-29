import React from 'react'
import NavbarComponentCopy from './components/NavbarComponentCopy.jsx'
import Hero from './pages/HeroSection.jsx'
import FeatureSection from './pages/FeatureSection.jsx'
import VisionInfo from './pages/VisionInfo.jsx'


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
      <div id='vision'>
        <VisionInfo />
      </div>
    </main>
  )
}

export default App
