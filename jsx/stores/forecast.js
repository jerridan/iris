import Reflux from 'reflux';
import request from 'superagent';
import Immutable from 'immutable';
import requestJsonp from 'superagent-jsonp';
requestJsonp(request);

import forecastActions from '../actions/forecast';
import forecastConfig from '../../config/forecast';

export default Reflux.createStore({
  data: Immutable.Map({
    forecast: null,
    geolocation: true
  }),
  getInitialState() {
    return this.data;
  },
  listenables: [forecastActions],
  onGetForecast(lat, lng) {
    var apiKey = forecastConfig.apiKey;
    request
      .get("https://api.forecast.io/forecast/" + apiKey + "/" + lat + "," + lng)
      .jsonp()
      .end((err, res)=> {
        this.data = this.data.set('forecast', Immutable.fromJS(res.body));
        this.trigger(this.data);
      });
  },
});
