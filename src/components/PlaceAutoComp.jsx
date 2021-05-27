import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Button, Form } from 'react-bootstrap';
import Markers from './Map/Markers'

// Styling in App.css

const PlacesAutoComp = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  const [category, setCategory] = useState("");
  // const [comment, setComment] = useState('');

  const submitHandler = () => {

  }



  return (
    <div className="places">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

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
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='category'>
                <Form.Label>category</Form.Label>
                <Form.Control
                  as='select'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=''>Select...</option>
                  <option value='plastics'>Plastics ♷</option>
                  <option value='paper'>Paper ♽</option>
                  <option value='clothes'>Clothes</option>
                  <option value='electronics'>electronics <Markers ariaLabel="clothes" symbol="📺" /></option>
                  <option value='furniture'>furniture <Markers ariaLabel="clothes" symbol="🛏" /></option>
                  <option value='metal'>metal <Markers ariaLabel="clothes" symbol="👕" /></option>
                  <option value='recyclables'>recyclables <Markers ariaLabel="clothes" symbol="👕" /></option>
                  <option value='glass'>glass <Markers ariaLabel="clothes" symbol="👕" /></option>
                  <option value='textiles'>textiles <Markers ariaLabel="clothes" symbol="👕" /></option>
                  <option value='others'>others <Markers ariaLabel="clothes" symbol="👕" /></option>


                </Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Submit
                      </Button>
            </Form>
          </div>
        )}
      </PlacesAutocomplete>
    </div>

  );
}

export default PlacesAutoComp;