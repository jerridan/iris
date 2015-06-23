import React from 'react';
import Immutable from 'immutable';

import viewActions from '../actions/view';

let currentTemp = React.createClass({
  render() {
    if (null === this.props.forecastStore.get('forecast', null)) {
      return false;
    }
    let temperature = null;
    if(this.props.view.get('celsius', false)) {
      temperature = Math.round((this.props.forecastStore.getIn(['forecast', 'currently', 'temperature']) - 32) * 5 / 9 * 10) / 10;
    } else {
      temperature = Math.round(this.props.forecastStore.getIn(['forecast', 'currently', 'temperature']) * 10) / 10;
    }
    return <div>
      {temperature}
      {this.props.forecastStore.getIn(['forecast', 'currently', 'summary'])}
      <input type="checkbox" onClick={viewActions.toggleCelsius}/>
    </div>
  }
});

export default currentTemp;