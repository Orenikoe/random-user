import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
// set state holding the location coordinates.

   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 39.252, lng: -9.12 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
    
   ));
   return(
      <div >
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          
        />
      </div>
   );
   }
};
export default Map;