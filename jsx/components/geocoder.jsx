import React from 'react';
import Immutable from 'immutable';

import forecastActions from '../actions/forecast';

const Geocode = React.createClass({
  getInitialState() {
    return {
      data: Immutable.Map()
    };
  },
  componentWillMount() {
    this.getGeolocation();
  },
  getForecast(lat, lng) {
    forecastActions.getForecast(lat, lng);
  },
  getGeolocation() {
    navigator.geolocation.getCurrentPosition((success)=> {
      this.getForecast(success.coords.latitude, success.coords.longitude);
      let geocoder = new google.maps.Geocoder();
      let latLng = new google.maps.LatLng(success.coords.latitude, success.coords.longitude);
      geocoder.geocode({'latLng': latLng}, ((results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results) {
            let location = results[2].formatted_address;
            this.setState({data: this.state.data.set('location', location)});
          } else {
            console.error('Google Maps API failed to get results for the geolocation');
          }
        } else {
          console.error('Google Maps Geocoder failed with status:', status);
        }
      }));
    }, (error)=> {
      console.error('ERROR(' + error.code + '): ' + error.message);
    }, {timeout: 5000});
  },
  render() {
    return <div className="location location-on-icon">
      {this.state.data.get('location')}
    </div>
  }
});

export default Geocode;