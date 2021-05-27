import React from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import { Icon } from '@iconify/react';



import './Map.css';

const LocationPin = ({ text }) => {
  return (

    <div className="pin">
      ⤋
      <p className="pin-text">{text}</p>
    </div>
  )
};

// const ApiKey = process.env.GoogleAPI;


// set Google Maps Geocoding API 
// Geocode.setApiKey(ApiKey); //  ⟽ Chuong's API key
Geocode.setApiKey('AIzaSyDwG4Tj1ziODB2N2--aZhhjn7IyIpNR0-k'); //  ⟽ Chuong's API key

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. A Geocoding request with region=ca (Canada) 
Geocode.setRegion("ca");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// // Get address from latitude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );

// Get latitude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);

const Map = ({ location, zoomLevel }) => {
  return (
    <>
      <div className="map">
        <h2 className="map-h2">Check out the location on the map</h2>

        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCiQ-ovaWviz8o2LjSus93PeUfFyFdKyY0' }} //Chuong's API key
            // bootstrapURLKeys={ {key: process.env.GoogleAPI}} //Chuong's API key
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  )
}

export default Map;