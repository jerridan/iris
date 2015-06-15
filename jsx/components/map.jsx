import React from 'react';
import ReactScriptLoaderModule from 'react-script-loader';

let ReactScriptLoaderMixin = ReactScriptLoaderModule.ReactScriptLoaderMixin;
let ReactScriptLoader = ReactScriptLoaderModule.ReactScriptLoader;

let scriptURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initializeMaps';

window.initializeMaps = () => {
  ReactScriptLoader.triggerOnScriptLoaded(scriptURL);
};

let Map = React.createClass({
  mixins: [ReactScriptLoaderMixin],
  getScriptURL() {
    return scriptURL;
  },
  deferOnScriptLoaded() {
    return true;
  },
  onScriptLoaded() {
    var center = new google.maps.LatLng(50.9744907, -114.103535);
    var mapOptions = {
      zoom: 12,
      center: center,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
    };
    var map = new google.maps.Map(this.getDOMNode(), mapOptions);
    console.log(map);
  },
  onScriptError() {
    console.warn('Google Maps API script failed to load');
  },
  render() {
    return <div className="mapCanvas" style={{height:'500px'}}/>;
  }
});

export default Map;