import React from 'react';
import Immutable from 'immutable';
import ReactScriptLoaderModule from 'react-script-loader';

import forecastActions from '../actions/forecast';

let ReactScriptLoaderMixin = ReactScriptLoaderModule.ReactScriptLoaderMixin;
let ReactScriptLoader = ReactScriptLoaderModule.ReactScriptLoader;
let scriptURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initializeMaps';

window.initializeMaps = () => {
  ReactScriptLoader.triggerOnScriptLoaded(scriptURL);
};

let Geocode = React.createClass({
  mixins: [ReactScriptLoaderMixin],
  getInitialState() {
    return {
      data: Immutable.Map()
    };
  },
  getScriptURL() {
    return scriptURL;
  },
  deferOnScriptLoaded() {
    return true;
  },
  onScriptLoaded() {
    this.getGeolocation();
  },
  onScriptError() {
    console.warn('Google Maps API script failed to load');
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
            console.warn('Google Maps API failed to get results for the geolocation');
          }
        } else {
          console.warn('Google Maps Geocoder failed with status:', status);
        }
      }));
    }, (error)=> {
      console.warn('ERROR(' + error.code + '): ' + error.message);
    }, {timeout: 5000});
  },
  render() {
    return <div>
      {this.state.data.get('location')}
    </div>
  }
});

export default Geocode;