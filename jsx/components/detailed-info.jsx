import React from 'react';
import Immutable from 'immutable';

let DetailedInfo = React.createClass({
  getPrecipitationProb() {
    let pp = this.props.forecastStore.getIn(['forecast', 'currently', 'precipProbability'], null);
    if (pp) {
      return pp.toFixed(1) * 100 + '%';
    } else {
      return 'N/A';
    }
  },
  getPrecipitationIntensity() {
    let pi = this.props.forecastStore.getIn(['forecast', 'currently', 'precipIntensity'], null);
    if (pi) {
      return pi.toFixed(2) + ' in/hr';
    } else {
      return 'N/A';
    }
  },
  getDewPoint() {
    let apparentTemp = this.props.forecastStore.getIn(['forecast', 'currently', 'dewPoint'], null);
    if (apparentTemp) {
      if (this.props.view.get('celsius')) {
        return ((apparentTemp - 32) * 5 / 9).toFixed(1) + ' C';
      } else {
        return apparentTemp + ' F';
      }
    } else {
      return 'N/A';
    }
  },
  getApparentTemp() {
    let apparentTemp = this.props.forecastStore.getIn(['forecast', 'currently', 'apparentTemperature'], null);
    if (apparentTemp) {
      if (this.props.view.get('celsius')) {
        return ((apparentTemp - 32) * 5 / 9).toFixed(1) + ' C';
      } else {
        return apparentTemp + ' F';
      }
    } else {
      return 'N/A';
    }
  },
  getCloudCover() {
    let cc = this.props.forecastStore.getIn(['forecast', 'currently', 'cloudCover'], null);
    if (cc) {
      return cc.toFixed(1) * 100 + '%';
    } else {
      return 'N/A';
    }
  },
  getHumidity() {
    let humidity = this.props.forecastStore.getIn(['forecast', 'currently', 'humidity'], null);
    if (humidity) {
      return humidity.toFixed(1) * 100 + '%';
    } else {
      return 'N/A';
    }
  },
  getPressure() {
    let pressure = this.props.forecastStore.getIn(['forecast', 'currently', 'pressure'], null);
    if (pressure) {
      return pressure.toFixed(1) + ' mb';
    } else {
      return 'N/A';
    }
  },
  getOzone() {
    let ozone = this.props.forecastStore.getIn(['forecast', 'currently', 'ozone'], null);
    if (ozone) {
      return ozone.toFixed(1) + ' DU';
    } else {
      return 'N/A';
    }
  },
  getWindSpeed() {
    let ws = this.props.forecastStore.getIn(['forecast', 'currently', 'windSpeed'], null);
    if (ws) {
      return ws.toFixed(2) + ' mi/hr';
    } else {
      return 'N/A';
    }
  },
  getWindBearing() {
    let wb = this.props.forecastStore.getIn(['forecast', 'currently', 'windBearing'], null);
    if (wb) {
      return wb.toFixed(1) + ' \u03B1';
    } else {
      return 'N/A';
    }
  },
  getVisibility() {
    let visibility = this.props.forecastStore.getIn(['forecast', 'currently', 'visibility'], null);
    if (visibility) {
      return visibility.toFixed(1) + ' mi';
    } else {
      return 'N/A';
    }
  },
  getNearestStormDistance() {
    let nsd = this.props.forecastStore.getIn(['forecast', 'currently', 'nearestStormDistance'], null);
    if (nsd) {
      return nsd.toFixed(1) + ' mi';
    } else {
      return 'N/A';
    }
  },
  getNearestStormBearing() {
    let nsb = this.props.forecastStore.getIn(['forecast', 'currently', 'nearestStormBearing'], null);
    if (nsb) {
      return nsb.toFixed(1) + ' \u03B1';
    } else {
      return 'N/A';
    }
  },
  render() {
    if ('details' !== this.props.view.get('info_type')) {
      return false;
    }
    console.log(this.props.forecastStore.get('forecast').toJS());
    return <div className="info-panel details">
      <table>
        <tbody>
        <tr>
          <td>Apparent Temperature</td>
          <td>{this.getApparentTemp()}</td>
        </tr>
        <tr>
          <td>Precipitation Probability</td>
          <td>{this.getPrecipitationProb()}</td>
        </tr>
        <tr>
          <td>Precipitation Intensity</td>
          <td>{this.getPrecipitationIntensity()}</td>
        </tr>
        <tr>
          <td>Cloud Cover</td>
          <td>{this.getCloudCover()}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{this.getHumidity()}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{this.getPressure()}</td>
        </tr>
        <tr>
          <td>Ozone</td>
          <td>{this.getOzone()}</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>{this.getWindSpeed()}</td>
        </tr>
        <tr>
          <td>Wind Bearing</td>
          <td>{this.getWindBearing()}</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>{this.getVisibility()}</td>
        </tr>
        <tr>
          <td>Nearest Storm</td>
          <td>{this.getNearestStormDistance()}</td>
        </tr>
        <tr>
          <td>Nearest Storm Bearing</td>
          <td>{this.getNearestStormBearing()}</td>
        </tr>
        <tr>
          <td>Dew Point</td>
          <td>{this.getDewPoint()}</td>
        </tr>
        </tbody>
      </table>
    </div>
  }
});

export default DetailedInfo;