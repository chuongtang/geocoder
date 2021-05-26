import React from 'react'
import MapSection from './components/Map/Map'
import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // Dummy google location for testing

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
      <DisclaimerSection />
      <FooterSection />
    </div>
  )
}

export default App
