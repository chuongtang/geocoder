import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';

const LocationPin = ({ text }) => {
  return (

    <div className="pin">
      ⤋
      <p className="pin-text">{text}</p>
    </div>
  )
};

const Map = ({ location, zoomLevel }) => {
console.log(location.lat);
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