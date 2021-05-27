import React from 'react'
import Map from './components/Map/Map'
import IntroSection from './components/intro/Intro'
// import ContactSection from './components/contact-section/ContactSection'
import PlaceAutoComp from './components/PlaceAutoComp.jsx'


import './App.css'


const Calgary = {
  address: 'Calgary, AB',
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
      <Map location={Calgary} zoomLevel={16} />
    </div>
  )
}

export default App
