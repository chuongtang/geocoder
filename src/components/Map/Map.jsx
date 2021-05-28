/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Button, Form } from 'react-bootstrap';
import Intro from './Intro'
import './Map.css';

// PlaceAUoComp

const PlacesAutoComp = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
  const [markerLoc, setMarkerLoc] = useState({});

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    setMarkerLoc(results);

  };
  const [category, setCategory] = useState("");
  // render markers selection

  const setMarker = (markerLoc) => {
    return (

      <div className="pin">
        ⤋
        <p className="pin-text">{markerLoc.text}</p>
      </div>
    )

  }

  return (
    <div className="places">
      <PlacesAutocomplete
        className='coord'
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='inputForm'>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
              Address
            <input {...getInputProps({ placeholder: "Type address" })} className='inputForm' />
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
            <Form onSubmit={setMarker}>
              <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as='select'
                  value={category}
                  className='inputForm'
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=''>Select...</option>
                  <option value='plastics'>Plastics 🧩</option>
                  <option value='paper'>Paper 📰</option>
                  <option value='clothes'>Clothes 👚</option>
                  <option value='electronics'>electronics 📺 </option>
                  <option value='furniture'>furniture 🛏️</option>
                  <option value='metal'>metal 🍴</option>
                  <option value='recyclables'>recyclables 🧃</option>
                  <option value='glass'>glass 🍸</option>
                  <option value='textiles'>textiles 🎏</option>
                  <option value='others'>others 🥡</option>
                </Form.Control>
              </Form.Group>

              <Button type='submit' className='btn'>
                Set Marker
              </Button>
            </Form>
          </div>
        )}
      </PlacesAutocomplete>
      <Intro />
    </div>

  );
}
// End of PlaceAutoComp

const markersArray = [{ address: "Calgary International Airport", lat: 51.13258, lng: -114.004907 },]

const LocationPin = ({ text }) => {
  return (

    <div className="pin">
      🍍
      <p className="pin-text">{text}</p>
    </div>
  )
};

const Map = ({ location, zoomLevel }) => {
  console.log(location);
  return (
    <>
      <div className="map">
        <PlacesAutoComp />
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