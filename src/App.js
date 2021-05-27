import React from 'react'
import Map from './components/Map/Map'
import IntroSection from './components/intro/Intro'
// import ContactSection from './components/contact-section/ContactSection'
import PlaceAutoComp from './components/PlaceAutoComp.jsx'


import './App.css'


const location = {
  address: 'Calgary, Ab, Canada',
  lat: 51.049999,
  lng: -114.066666,
} // Hard code YYC

function App() {
  return (
    <div className="App">
      <div className='nonMap'>
        <IntroSection />
        <PlaceAutoComp />
      </div>
      <Map location={location} zoomLevel={17} />
    </div>
  )
}

export default App
