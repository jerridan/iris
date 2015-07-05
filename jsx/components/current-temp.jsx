import React from 'react';
import Immutable from 'immutable';
import cx from 'classnames';

import viewActions from '../actions/view';

let currentTemp = React.createClass({
  render() {
    if (null === this.props.forecastStore.get('forecast', null)) {
      return false;
    }
    let temperature = "";
    if (this.props.view.get('celsius', false)) {
      temperature = ((this.props.forecastStore.getIn(['forecast', 'currently', 'temperature']) - 32) * 5 / 9).toFixed(1);
    } else {
      temperature = this.props.forecastStore.getIn(['forecast', 'currently', 'temperature']).toFixed(1);
    }
    return <div className="current">
      <div className="temperature">{temperature + "°"}</div>
      <div className="weather-status">
        <div className={cx("weather-icon",this.props.forecastStore.getIn(['forecast','currently','icon'],''))}/>
        <div className="summary">{this.props.forecastStore.getIn(['forecast', 'currently', 'summary'])}</div>
      </div>
      <div className="temp-unit-select">
        <input className="material-radio" checked={this.props.view.get('celsius', false)}
               onChange={viewActions.toggleCelsius} type="radio" name="tempUnit" id="celsius"/>
        <label htmlFor="celsius">C</label>
        <input className="material-radio" checked={!this.props.view.get('celsius', false)}
               onChange={viewActions.toggleCelsius} type="radio" name="tempUnit" id="fahrenheit"/>
        <label htmlFor="fahrenheit">F</label>
      </div>
    </div>
  }
});

export default currentTemp;