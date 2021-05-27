import React from 'react'
import Map from './components/Map/Map'
import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'


import './App.css'




const location = {
  address: 'Calgary, Ab, Canada',
  lat: 37.42216,
  lng: -122.08427,
} // Dummy google location for testing

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <Map location={location} zoomLevel={15} /> {/* include it here */}
    </div>
  )
}

export default App
