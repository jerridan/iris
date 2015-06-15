import React from 'react';
import Immutable from 'immutable';
import request from 'superagent';

import Map from './map.jsx';
import Geocoder from './geocoder.jsx';

import forecastActions from '../actions/forecast';
import forecastStore from '../stores/forecast';

let Iris = React.createClass({
  render() {
    return <div>
      <Geocoder/>
    </div>
  }
});

export default Iris;