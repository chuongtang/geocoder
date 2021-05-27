import React from 'react'


const Intro = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-h2">Testing sandbox for Google Map API</h2>

      <p>
        In this project, I use google-map-react package to help me integrate location into my React app. This package is a component written over a small set of the Google Maps API, and it allows any React component to be rendered on the Google Map.</p>

      <p>➥ <a href="https://www.npmjs.com/package/google-map-react" style={{ color: 'white' }}>Goole-Map-React</a></p>
      <p>Geocoding is the process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA") into geographic coordinates (like latitude 37.423021 and longitude -122.083739), which you can use to place markers or position the map.</p>
      <p>➥ <a href="https://developers.google.com/maps/documentation/javascript/geocoding" style={{ color: 'white' }}>GeoCoding</a></p>
      <p></p>

    </div>
  )
}

export default Intro
