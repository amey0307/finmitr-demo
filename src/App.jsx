import React from 'react'
import NavbarComponentCopy from './components/NavbarComponentCopy.jsx'
import Hero from './pages/HeroSection.jsx'


function App() {
  return (
    <main className='min-h-[200vh]'>
      <NavbarComponentCopy />
      <div id='hero'>
        <Hero />
      </div>
    </main>
  )
}

export default App
