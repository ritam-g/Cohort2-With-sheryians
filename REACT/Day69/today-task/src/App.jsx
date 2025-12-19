import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MiddleOfHero from './components/MiddleOfHero';
import ThreeImage from './components/ThreeImage';
import BelowOfThreeImage from './components/BelowOfThreeImage';
import SndThreeImaged from './components/SndThreeImaged';
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <MiddleOfHero />
      <ThreeImage />
      <BelowOfThreeImage />
      <SndThreeImaged />
    </div>
  )
}

export default App
