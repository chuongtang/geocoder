import React from 'react'


const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Testing sandbox for Google Map API</h1>

      <h3>
        In this project, I use google-map-react package to help me integrate location into my React app. This package is a component written over a small set of the Google Maps API, and it allows any React component to be rendered on the Google Map.</h3>

      <p>➥ <a href="https://www.npmjs.com/package/google-map-react" style={{ color: 'white', background:'darkblue' }}>Goole-Map-React</a></p>
      <h3>Geocoding is the process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA") into geographic coordinates (like latitude 37.423021 and longitude -122.083739), which you can use to place markers or position the map.</h3>
      <p>➥ <a href="https://developers.google.com/maps/documentation/javascript/geocoding" style={{ color: 'white', background:'darkblue' }}>GeoCoding</a></p>
      <p></p>

    </div>
  )
}

export default Intro
